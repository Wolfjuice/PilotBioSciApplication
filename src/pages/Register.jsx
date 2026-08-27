
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Register() {
//   const { register } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const nav = useNavigate();

//   const passwordPolicyText = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.';
//   const isPasswordStrong = (pw) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pw || '');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       if (!isPasswordStrong(password)) {
//         throw new Error(passwordPolicyText);
//       }
//       // register accepts (username, password, email) or an object depending on your AuthContext
//       await register(username.trim(), password, email.trim() || undefined);
//       // success — navigate or show success
//       nav('/');
//     } catch (err) {
//       console.error('REGISTER: error', err);
//       const msg = err?.body?.error || err.message || 'Registration failed';
//       setError(msg);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="card mx-auto" style={{ maxWidth: 540 }}>
//       <div className="card-body">
//         <h5 className="card-title">Register</h5>
//         <form onSubmit={handleSubmit}>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="mb-2">
//             <label className="form-label">Username</label>
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="form-label">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-2">
//             <label className="form-label">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               className="form-control"
//               required
//             />
//             <div className="form-text">{passwordPolicyText}</div>
//           </div>

//           <button className="btn btn-primary" type="submit" disabled={loading}>
//             {loading ? 'Registering…' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Register() {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  // Track which fields have been touched (clicked and left)
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false
  });

  // Track field-specific errors
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const passwordPolicyText = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.';
  const isPasswordStrong = (pw) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pw || '');
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  // Validate individual field
  const validateField = (fieldName, value) => {
    let error = '';

    if (fieldName === 'username') {
      if (!value.trim()) {
        error = 'Username is required';
      } else if (value.trim().length < 3) {
        error = 'Username must be at least 3 characters';
      }
    }

    if (fieldName === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!isValidEmail(value.trim())) {
        error = 'Please enter a valid email address';
      }
    }

    if (fieldName === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (!isPasswordStrong(value)) {
        error = passwordPolicyText;
      }
    }

    return error;
  };

  // Handle field blur (when user leaves the field)
  const handleBlur = (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));

    let value = fieldName === 'username' ? username : fieldName === 'email' ? email : password;
    const error = validateField(fieldName, value);
    
    setFieldErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  // Handle field change
  const handleChange = (fieldName, value) => {
    if (fieldName === 'username') setUsername(value);
    if (fieldName === 'email') setEmail(value);
    if (fieldName === 'password') setPassword(value);

    // If field has been touched, validate it in real-time
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setFieldErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // Mark all fields as touched
    setTouched({ username: true, email: true, password: true });

    // Validate all fields
    const usernameError = validateField('username', username);
    const emailError = validateField('email', email);
    const passwordError = validateField('password', password);

    setFieldErrors({
      username: usernameError,
      email: emailError,
      password: passwordError
    });

    // If any field has errors, don't submit
    if (usernameError || emailError || passwordError) {
      return;
    }

    setLoading(true);

    try {
      await register(username.trim(), password, email.trim());
      nav('/');
    } catch (err) {
      console.error('REGISTER: error', err);
      const msg = err?.body?.error || err.message || 'Registration failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: 540 }}>
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          {/* USERNAME FIELD */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              value={username}
              onChange={(e) => handleChange('username', e.target.value)}
              onBlur={() => handleBlur('username')}
              className={`form-control ${
                touched.username && fieldErrors.username ? 'is-invalid' : ''
              }`}
              placeholder="Enter username"
            />
            {touched.username && fieldErrors.username && (
              <div className="invalid-feedback d-block">
                {fieldErrors.username}
              </div>
            )}
          </div>

          {/* EMAIL FIELD */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              type="email"
              className={`form-control ${
                touched.email && fieldErrors.email ? 'is-invalid' : ''
              }`}
              placeholder="Enter email address"
            />
            {touched.email && fieldErrors.email && (
              <div className="invalid-feedback d-block">
                {fieldErrors.email}
              </div>
            )}
          </div>

          {/* PASSWORD FIELD */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              type="password"
              className={`form-control ${
                touched.password && fieldErrors.password ? 'is-invalid' : ''
              }`}
              placeholder="Enter password"
            />
            {touched.password && fieldErrors.password && (
              <div className="invalid-feedback d-block">
                {fieldErrors.password}
              </div>
            )}
            {/* Show password requirements only if field has been touched */}
            {touched.password && !fieldErrors.password && (
              <div className="form-text text-success">✓ Password meets requirements</div>
            )}
            {!touched.password && (
              <div className="form-text">{passwordPolicyText}</div>
            )}
          </div>

          <button 
            className="btn btn-primary w-100" 
            type="submit" 
            disabled={loading || fieldErrors.username || fieldErrors.email || fieldErrors.password}
          >
            {loading ? 'Registering…' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
