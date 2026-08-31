import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FormField = ({
  label,
  type = 'text',
  placeholder = '',
  fullWidth = false,
  value,
  onChange,
  onBlur,
  touched,
  error,
  optional = false,
}) => (
  <div className={fullWidth ? 'mb-3' : 'mb-3'} style={!fullWidth ? { flex: 1 } : {}}>
    <label className="form-label">
      {label}
      {/* Only show asterisk if NOT optional */}
      {!optional && (
        <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
      )}
      {/* Show "(Optional)" text instead */}
      {optional && (
        <span style={{ color: '#6c757d', marginLeft: '4px', fontSize: '0.85em' }}>(Optional)</span>
      )}
    </label>
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      className={`form-control ${touched && error ? 'is-invalid' : ''}`}
      placeholder={placeholder}
    />
    {touched && error && (
      <div className="invalid-feedback d-block">
        {error}
      </div>
    )}
  </div>
);

export default function Register() {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    piFirstName: '',
    piLastName: '',
    organization: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    piFirstName: false,
    piLastName: false,
    organization: false
  });

  const [fieldErrors, setFieldErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    piFirstName: '',
    piLastName: '',
    organization: ''
  });

  const passwordPolicyText = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.';
  const isPasswordStrong = (pw) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pw || '');
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const validateField = (fieldName, value) => {
    let error = '';

    if (fieldName === 'firstName') {
      if (!value.trim()) {
        error = 'First name is required';
      } else if (value.trim().length < 2) {
        error = 'First name must be at least 2 characters';
      }
    }

    if (fieldName === 'lastName') {
      if (!value.trim()) {
        error = 'Last name is required';
      } else if (value.trim().length < 2) {
        error = 'Last name must be at least 2 characters';
      }
    }

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

    if (fieldName === 'piFirstName') {
      if (value.trim() && value.trim().length < 2) {
        error = 'PI first name must be at least 2 characters';
      }
    }

    if (fieldName === 'piLastName') {
      if (value.trim() && value.trim().length < 2) {
        error = 'PI last name must be at least 2 characters';
      }
    }

    if (fieldName === 'organization') {
      if (!value.trim()) {
        error = 'Organization is required';
      } else if (value.trim().length < 2) {
        error = 'Organization must be at least 2 characters';
      }
    }

    return error;
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, formData[fieldName]);
    setFieldErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const handleChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setFieldErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const allTouched = Object.keys(touched).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const newErrors = {};
    Object.keys(formData).forEach(fieldName => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });
    setFieldErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err);
    if (hasErrors) {
      return;
    }

    setLoading(true);

    try {
      await register({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password,
        piFirstName: formData.piFirstName.trim(),
        piLastName: formData.piLastName.trim(),
        organization: formData.organization.trim()
      });
      nav('/');
    } catch (err) {
      console.error('REGISTER: error', err);
      const msg = err?.body?.error || err.message || 'Registration failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  const hasErrors = Object.values(fieldErrors).some(err => err);

  return (
    <div className="card mx-auto" style={{ maxWidth: 540 }}>
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          {/* FIRST NAME + LAST NAME (2-Column Row) */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
            <FormField
              fieldName="firstName"
              label="First Name"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              touched={touched.firstName}
              error={fieldErrors.firstName}
            />
            <FormField
              fieldName="lastName"
              label="Last Name"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              touched={touched.lastName}
              error={fieldErrors.lastName}
            />
          </div>

          {/* USERNAME */}
          <FormField
            fieldName="username"
            label="Username"
            placeholder="Enter username"
            fullWidth
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            onBlur={() => handleBlur('username')}
            touched={touched.username}
            error={fieldErrors.username}
          />

          {/* EMAIL */}
          <FormField
            fieldName="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
            fullWidth
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            touched={touched.email}
            error={fieldErrors.email}
          />

          {/* PASSWORD – special handling for the helper text */}
          <div className="mb-3">
            <label className="form-label">
              Password
              <span style={{ color: '#dc3545', marginLeft: '4px' }}>*</span>
            </label>
            <input
              value={formData.password}
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
            {touched.password && !fieldErrors.password && (
              <div className="form-text text-success">✓ Password meets requirements</div>
            )}
            {!touched.password && (
              <div className="form-text">{passwordPolicyText}</div>
            )}
          </div>



          <div style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
            <FormField
              fieldName="piFirstName"
              label="PI First Name"
              placeholder="Enter PI first name"
              value={formData.piFirstName}
              onChange={(e) => handleChange('piFirstName', e.target.value)}
              onBlur={() => handleBlur('piFirstName')}
              touched={touched.piFirstName}
              error={fieldErrors.piFirstName}
              optional={true}  
            />
            <FormField
              fieldName="piLastName"
              label="PI Last Name"
              placeholder="Enter PI last name"
              value={formData.piLastName}
              onChange={(e) => handleChange('piLastName', e.target.value)}
              onBlur={() => handleBlur('piLastName')}
              touched={touched.piLastName}
              error={fieldErrors.piLastName}
              optional={true}  
            />
          </div>

          {/* ORGANIZATION */}
          <FormField
            fieldName="organization"
            label="Organization"
            placeholder="Enter organization name"
            fullWidth
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            onBlur={() => handleBlur('organization')}
            touched={touched.organization}
            error={fieldErrors.organization}
          />

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={loading || hasErrors}
          >
            {loading ? 'Registering…' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}