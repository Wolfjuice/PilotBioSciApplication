
const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_in_production';

// MySQL connection settings
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'pilotbiosci';

const CLIENT_ORIGINS = (process.env.CORS_ORIGINS || 'http://localhost:5173').split(',');

// Account security settings
const MAX_FAILED_LOGIN_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 30;
const LOCKOUT_MS = LOCKOUT_MINUTES * 60 * 1000;

const app = express();

// Basic security middleware
app.use(helmet({
  hsts: process.env.NODE_ENV === 'production'
    ? { maxAge: 31536000, includeSubDomains: true, preload: true }
    : false
}));
app.use(express.json());
app.use(cookieParser());

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
}));

// HTTPS enforcement
app.set('trust proxy', 1);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
  }
  next();
});

// CORS
const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (CLIENT_ORIGINS.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ============= MYSQL DB =============

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function initDb() {
  const conn = await pool.getConnection();
  try {
    // UPDATED TABLE SCHEMA WITH NEW FIELDS
    await conn.query(`CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      pi_first_name VARCHAR(255) NULL,
      pi_last_name VARCHAR(255) NULL,
      organization VARCHAR(255) NOT NULL,
      failed_attempts INT NOT NULL DEFAULT 0,
      lockout_until BIGINT NULL,
      email_verified BOOLEAN DEFAULT FALSE,
      email_verification_token VARCHAR(255),
      email_token_expires_at BIGINT,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS password_reset_tokens (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NULL,
      token_hash CHAR(64) NOT NULL,
      expires_at BIGINT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_token_hash (token_hash),
      INDEX idx_user_id (user_id),
      CONSTRAINT fk_prt_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS orders (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NULL,
      status VARCHAR(50) NOT NULL DEFAULT 'pending_payment',
      currency CHAR(3) NOT NULL DEFAULT 'USD',
      subtotal_cents INT NOT NULL DEFAULT 0,
      shipping_cents INT NOT NULL DEFAULT 0,
      tax_cents INT NOT NULL DEFAULT 0,
      total_cents INT NOT NULL DEFAULT 0,
      items_json JSON NOT NULL,
      shipping_json JSON NULL,
      delivery_method VARCHAR(50) NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_user_id (user_id),
      CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
    ) ENGINE=InnoDB;`);
  } finally {
    conn.release();
  }
}

// Small helpers
async function dbQueryOne(sql, params) {
  const [rows] = await pool.query(sql, params);
  return Array.isArray(rows) && rows.length ? rows[0] : null;
}

async function dbExecute(sql, params) {
  const [result] = await pool.execute(sql, params);
  return result;
}

function validatePassword(password) {
  const ok = typeof password === 'string' && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
  if (ok) return { ok: true };
  return {
    ok: false,
    message: 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.'
  };
}

// VALIDATION FUNCTION FOR NEW FIELDS
function validateNameField(name, fieldLabel) {
  if (!name || !name.trim()) {
    return { ok: false, message: `${fieldLabel} is required` };
  }
  if (name.trim().length < 2) {
    return { ok: false, message: `${fieldLabel} must be at least 2 characters` };
  }
  return { ok: true };
}

function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const crypto = require('crypto');

function generateVerificationToken() {
  const token = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  return { token, tokenHash };
}

function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function authenticateFromCookie(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return next();
  try {
    req.user = jwt.verify(token, JWT_SECRET);
  } catch {
    res.clearCookie('token');
  }
  next();
}

function requireAuth(req, res, next) {
  if (!req.user?.id) return res.status(401).json({ error: 'unauthorized' });
  next();
}

app.use(authenticateFromCookie);


app.post('/api/auth/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      piFirstName,
      piLastName,
      organization
    } = req.body || {};

    // VALIDATE ALL REQUIRED FIELDS
    const firstNameValidation = validateNameField(firstName, 'First name');
    if (!firstNameValidation.ok) {
      return res.status(400).json({ error: firstNameValidation.message });
    }

    const lastNameValidation = validateNameField(lastName, 'Last name');
    if (!lastNameValidation.ok) {
      return res.status(400).json({ error: lastNameValidation.message });
    }

    const cleanUsername = (username || '').trim();
    if (!cleanUsername) {
      return res.status(400).json({ error: 'username is required' });
    }
    if (cleanUsername.length < 3) {
      return res.status(400).json({ error: 'username must be at least 3 characters' });
    }

    const cleanEmail = (email || '').trim();
    if (!cleanEmail) {
      return res.status(400).json({ error: 'email is required' });
    }
    if (!validateEmailFormat(cleanEmail)) {
      return res.status(400).json({ error: 'invalid email format' });
    }

    if (!password) {
      return res.status(400).json({ error: 'password is required' });
    }

    const pwCheck = validatePassword(password);
    if (!pwCheck.ok) {
      return res.status(400).json({ error: pwCheck.message });
    }

    const orgValidation = validateNameField(organization, 'Organization');
    if (!orgValidation.ok) {
      return res.status(400).json({ error: orgValidation.message });
    }

    // Check for duplicate username/email BEFORE creating user
    const existingUser = await dbQueryOne(
      'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
      [cleanUsername, cleanEmail]
    );
    if (existingUser) {
      return res.status(409).json({ error: 'Registration failed' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate email verification token
    const { token: verificationToken, tokenHash } = generateVerificationToken();
    const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 hours

    // Insert user with email_verified = false
    const result = await dbExecute(
      `INSERT INTO users (
        first_name,
        last_name,
        username,
        email,
        password_hash,
        pi_first_name,
        pi_last_name,
        organization,
        email_verified,
        email_verification_token,
        email_token_expires_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstName.trim(),
        lastName.trim(),
        cleanUsername,
        cleanEmail,
        hashedPassword,
        piFirstName?.trim() || null,
        piLastName?.trim() || null,
        organization.trim(),
        false,
        tokenHash,
        expiresAt
      ]
    );

    // Send verification email
    const frontendBase = (process.env.FRONTEND_URL && process.env.FRONTEND_URL.trim())
      ? process.env.FRONTEND_URL.trim()
      : (req.get && req.get('origin')) || `http://localhost:${process.env.FRONTEND_PORT || 5173}`;

    const verifyUrl = `${frontendBase.replace(/\/$/, '')}/verify-email?token=${verificationToken}&email=${encodeURIComponent(cleanEmail)}`;

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: cleanEmail,
      subject: 'Verify Your Email Address - PilotBioSci',
      text: `Welcome to PilotBioSci!\n\nPlease verify your email by clicking this link:\n${verifyUrl}\n\nThis link expires in 24 hours.\n\nIf you did not create this account, please ignore this email.`,
      html: `
        <h2>Welcome to PilotBioSci!</h2>
        <p>Please verify your email by clicking the link below:</p>
        <p><a href="${verifyUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email</a></p>
        <p>This link expires in 24 hours.</p>
        <p>If you did not create this account, please ignore this email.</p>
      `
    };

    transporter.sendMail(mailOptions)
      .then(info => console.log('Verification email sent:', info.messageId))
      .catch(err => console.warn('Verification email error:', err?.message));

    return res.status(201).json({
      ok: true,
      message: 'Registration successful. Please check your email to verify your account.'
    });
  } catch (err) {
    console.error('Registration error', err);
    return res.status(500).json({ error: 'Registration failed' });
  }
});

// EMAIL VERIFICATION ENDPOINT
app.post('/api/auth/verify-email', async (req, res) => {
  try {
    const { token, email } = req.body || {};
    
    if (!token || !email) {
      return res.status(400).json({ error: 'Invalid verification request' });
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const emailLower = email.trim().toLowerCase();

    const user = await dbQueryOne(
      `SELECT id, email_verified FROM users 
       WHERE email = ? AND email_verification_token = ? 
       AND email_token_expires_at > ? LIMIT 1`,
      [emailLower, tokenHash, Date.now()]
    );

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification link' });
    }

    // Mark email as verified
    await dbExecute(
      `UPDATE users SET email_verified = TRUE, email_verification_token = NULL, 
       email_token_expires_at = NULL WHERE id = ?`,
      [user.id]
    );

    return res.json({ ok: true, message: 'Email verified successfully' });
  } catch (err) {
    console.error('Email verification error', err);
    return res.status(500).json({ error: 'Verification failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    const cleanUsername = (username || '').trim();
    if (!cleanUsername || !password) {
      return res.status(400).json({ error: 'username and password required' });
    }

    // UPDATED QUERY TO INCLUDE NEW FIELDS
    // const row = await dbQueryOne(
    //   `SELECT id, username, password_hash, first_name, last_name,
    //           failed_attempts, lockout_until FROM users WHERE username = ? LIMIT 1`,
    //   [cleanUsername]
    // );
    // if (!row) {
    //   return res.status(400).json({ error: 'invalid username or password' });
    // }
    const row = await dbQueryOne(
      'SELECT id, password_hash, email_verified FROM users WHERE username = ? LIMIT 1',
      [cleanUsername]
    );

    if (!row) {
      return res.status(401).json({ error: 'invalid username or password' });
    }

    // CHECK EMAIL VERIFICATION STATUS
    if (!row.email_verified) {
      return res.status(403).json({ 
        error: 'Please verify your email before logging in',
        emailNotVerified: true 
      });
    }


    // Lockout enforcement
    const lockoutUntil = row.lockout_until ? Number(row.lockout_until) : 0;
    if (lockoutUntil && Date.now() < lockoutUntil) {
      const remainingMs = lockoutUntil - Date.now();
      const remainingMin = Math.ceil(remainingMs / 60000);
      return res.status(423).json({
        error: `Account locked due to too many failed login attempts. Try again in ${remainingMin} minute(s).`
      });
    }

    const match = await bcrypt.compare(password, row.password_hash);
    if (!match) {
      const currentAttempts = Number(row.failed_attempts || 0);
      const nextAttempts = currentAttempts + 1;

      if (nextAttempts >= MAX_FAILED_LOGIN_ATTEMPTS) {
        const until = Date.now() + LOCKOUT_MS;
        await dbExecute(
          'UPDATE users SET failed_attempts = 0, lockout_until = ? WHERE id = ?',
          [until, row.id]
        );
        return res.status(423).json({
          error: `Account locked due to too many failed login attempts. Try again in ${LOCKOUT_MINUTES} minute(s).`
        });
      }

      await dbExecute('UPDATE users SET failed_attempts = ? WHERE id = ?', [nextAttempts, row.id]);
      return res.status(400).json({ error: 'invalid username or password' });
    }

    // Successful login: clear counters
    await dbExecute('UPDATE users SET failed_attempts = 0, lockout_until = NULL WHERE id = ?', [row.id]);

    const user = {
      id: row.id,
      username: row.username,
      first_name: row.first_name,
      last_name: row.last_name
    };
    const token = signToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.json({ user });
  } catch (err) {
    console.error('login error', err);
    return res.status(500).json({ error: 'internal error' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ ok: true });
});

// UPDATED TO RETURN NEW FIELDS
app.get('/api/auth/me', (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'not authenticated' });
  res.json({ user: req.user });
});

// NEW ENDPOINT: GET FULL USER PROFILE
// This endpoint returns all user information (not just from token)
app.get('/api/users/profile', requireAuth, async (req, res) => {
  try {
    const user = await dbQueryOne(
      `SELECT id, first_name, last_name, username, email,
              pi_first_name, pi_last_name, organization, created_at
       FROM users WHERE id = ? LIMIT 1`,
      [req.user.id]
    );
    if (!user) {
      return res.status(404).json({ error: 'user not found' });
    }
    res.json({ user });
  } catch (err) {
    console.error('profile error', err);
    res.status(500).json({ error: 'internal error' });
  }
});

// NEW ENDPOINT: UPDATE USER PROFILE
app.put('/api/users/profile', requireAuth, async (req, res) => {
  try {
    const { firstName, lastName, piFirstName, piLastName, organization } = req.body || {};

    // Validate all fields
    const firstNameValidation = validateNameField(firstName, 'First name');
    if (!firstNameValidation.ok) {
      return res.status(400).json({ error: firstNameValidation.message });
    }

    const lastNameValidation = validateNameField(lastName, 'Last name');
    if (!lastNameValidation.ok) {
      return res.status(400).json({ error: lastNameValidation.message });
    }

   // PI names are optional - validate only if provided
    let piFirstNameValidation = { ok: true };
    if (piFirstName && piFirstName.trim()) {
    piFirstNameValidation = validateNameField(piFirstName, 'PI first name');
    if (!piFirstNameValidation.ok) {
        return res.status(400).json({ error: piFirstNameValidation.message });
    }
    }

    let piLastNameValidation = { ok: true };
    if (piLastName && piLastName.trim()) {
    piLastNameValidation = validateNameField(piLastName, 'PI last name');
    if (!piLastNameValidation.ok) {
        return res.status(400).json({ error: piLastNameValidation.message });
    }
    }

    const cleanOrganization = (organization || '').trim();
    if (!cleanOrganization) {
      return res.status(400).json({ error: 'organization is required' });
    }
    if (cleanOrganization.length < 2) {
      return res.status(400).json({ error: 'organization must be at least 2 characters' });
    }

    await dbExecute(
    `UPDATE users SET
        first_name = ?, last_name = ?,
        pi_first_name = ?, pi_last_name = ?,
        organization = ?
    WHERE id = ?`,
    [
        firstName.trim(),
        lastName.trim(),
        piFirstName ? piFirstName.trim() : null,
        piLastName ? piLastName.trim() : null,
        cleanOrganization,
        req.user.id
    ]
    );

    const user = await dbQueryOne(
      `SELECT id, first_name, last_name, username, email,
              pi_first_name, pi_last_name, organization
       FROM users WHERE id = ? LIMIT 1`,
      [req.user.id]
    );

    res.json({ user });
  } catch (err) {
    console.error('update profile error', err);
    res.status(500).json({ error: 'internal error' });
  }
});

// ============= EMAIL INQUIRY =============

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 465,
  secure: process.env.EMAIL_SECURE === 'false' ? false : true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify()
  .then(() => console.log('Mail transporter ready'))
  .catch(err => console.warn('Mail transporter verify warning:', err?.message));

app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, email, phone, company, country, productId, productTitle, message } = req.body || {};

    if (!email || !message) {
      return res.status(400).json({ error: 'email and message are required' });
    }

    const productDisplay = productTitle || productId || 'N/A';

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'apeshot100@gmail.com',
      subject: `Website Inquiry — ${productDisplay}`,
      text: `
Name: ${name || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Country: ${country || 'N/A'}
Product: ${productDisplay}

Message:
${message}
      `,
      html: `
        <h2>Website Inquiry</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Product:</strong> ${productDisplay}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Inquiry email sent:', info.messageId);

    res.json({ ok: true });
  } catch (err) {
    console.error('Inquiry email error:', err);
    res.status(500).json({ error: 'error sending email' });
  }
});

// ============= ORDERS =============

app.post('/api/orders', requireAuth, async (req, res) => {
  try {
    const { items, shipping, delivery, currency } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'items required' });
    }

    let subtotalCents = 0;
    for (const it of items) {
      const price = Number(it?.price);
      const qty = Number(it?.qty);
      if (!Number.isFinite(price) || !Number.isFinite(qty) || qty <= 0) {
        return res.status(400).json({ error: 'invalid item payload' });
      }
      subtotalCents += Math.round(price * 100) * qty;
    }

    const shippingCents = delivery === 'express' ? 1499 : 699;
    const taxCents = 0;
    const totalCents = subtotalCents + shippingCents + taxCents;

    const result = await dbExecute(
      `INSERT INTO orders (
        user_id, status, currency, subtotal_cents, shipping_cents,
        tax_cents, total_cents, items_json, shipping_json, delivery_method
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        'pending_payment',
        (currency || 'USD').toUpperCase(),
        subtotalCents,
        shippingCents,
        taxCents,
        totalCents,
        JSON.stringify(items),
        shipping ? JSON.stringify(shipping) : null,
        delivery || null
      ]
    );

    return res.json({ ok: true, orderId: result.insertId });
  } catch (err) {
    console.error('create order error', err);
    return res.status(500).json({ error: 'internal error' });
  }
});

// ============= PASSWORD RESET =============

// const crypto = require('crypto');

app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ message: 'If an account exists for that email, a reset link has been sent.' });

    const genericResponse = { message: 'If an account exists for that email, a reset link has been sent.' };

    const emailLower = String(email).trim().toLowerCase();
    const row = await dbQueryOne('SELECT id, email FROM users WHERE email = ? LIMIT 1', [emailLower]);
    if (!row) {
      return res.status(200).json(genericResponse);
    }

    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = Date.now() + (1000 * 60 * 60);

    try {
      await dbExecute(
        'INSERT INTO password_reset_tokens (user_id, token_hash, expires_at) VALUES (?, ?, ?)',
        [row.id, tokenHash, expiresAt]
      );
    } catch (err2) {
      console.error('Failed to store reset token', err2);
      return res.status(200).json(genericResponse);
    }

    const frontendBase = (process.env.FRONTEND_URL && process.env.FRONTEND_URL.trim())
      ? process.env.FRONTEND_URL.trim()
      : (req.get && req.get('origin')) || `http://localhost:${process.env.FRONTEND_PORT || 5173}`;

    const resetUrl = `${frontendBase.replace(/\/$/, '')}/reset-password?token=${token}&email=${encodeURIComponent(row.email)}`;

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: row.email,
      subject: 'Password reset for your account',
      text: `We received a request to reset your password. Use this link to reset it (valid 1 hour): ${resetUrl}`,
      html: `<p>We received a request to reset your password. Click the link below to reset it. This link is valid for 1 hour.</p>
             <p><a href="${resetUrl}">Reset password</a></p>`
    };

    transporter.sendMail(mailOptions)
      .then(info => console.log('Password reset email sent:', info.messageId))
      .catch(errMail => console.warn('Password reset email error:', errMail?.message));

    return res.status(200).json(genericResponse);
  } catch (err) {
    console.error('forgot-password error', err);
    return res.status(200).json({ message: 'If an account exists for that email, a reset link has been sent.' });
  }
});

app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { token, email, newPassword } = req.body || {};
    if (!token || !newPassword || !email) return res.status(400).json({ error: 'invalid request' });

    const pwCheck = validatePassword(newPassword);
    if (!pwCheck.ok) {
      return res.status(400).json({ error: pwCheck.message });
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const emailLower = String(email).trim().toLowerCase();

    const row = await dbQueryOne(
      `SELECT t.id AS token_id, t.user_id, t.expires_at, u.email
       FROM password_reset_tokens t
       JOIN users u ON u.id = t.user_id
       WHERE t.token_hash = ? AND u.email = ? AND t.expires_at > ?
       LIMIT 1`,
      [tokenHash, emailLower, Date.now()]
    );

    if (!row) {
      return res.status(400).json({ error: 'invalid or expired token' });
    }

    const saltRounds = 12;
    const newHash = await bcrypt.hash(newPassword, saltRounds);
    try {
      await dbExecute(
        'UPDATE users SET password_hash = ?, failed_attempts = 0, lockout_until = NULL WHERE id = ?',
        [newHash, row.user_id]
      );

      await dbExecute('DELETE FROM password_reset_tokens WHERE user_id = ?', [row.user_id]);
    } catch (updErr) {
      console.error('Failed to update password', updErr);
      return res.status(500).json({ error: 'internal error' });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: row.email,
      subject: 'Your password was changed',
      text: 'Your account password was successfully changed. If you did not perform this action, contact support immediately.',
      html: '<p>Your account password was successfully changed. If you did not perform this action, contact support immediately.</p>'
    };
    transporter.sendMail(mailOptions).catch(() => {});
    return res.json({ ok: true });
  } catch (err) {
    console.error('reset-password error', err);
    return res.status(500).json({ error: 'internal error' });
  }
});

// ============= PROD CLIENT =============

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '..', 'dist');
  app.use(express.static(clientDist));
  app.get('*', (_, res) =>
    res.sendFile(path.join(clientDist, 'index.html'))
  );
}

initDb()
  .then(() => {
    console.log(`Connected to MySQL at ${DB_HOST}:${DB_PORT} / DB=${DB_NAME}`);
    app.listen(PORT, () => {
      console.log('Server running on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize MySQL connection / schema.');
    console.error('Check DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME in server/.env');
    console.error(err);
    process.exit(1);
  });