import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { userProfile, updateProfile, user, loading } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [saving, setSaving] = useState(false);
  
  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    piFirstName: '',
    piLastName: '',
    organization: ''
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        firstName: userProfile.first_name || '',
        lastName: userProfile.last_name || '',
        piFirstName: userProfile.pi_first_name || '',
        piLastName: userProfile.pi_last_name || '',
        organization: userProfile.organization || ''
      });
    }
  }, [userProfile]);

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName.replace(/([A-Z])/g, ' $1').trim()} is required`;
    }
    if (value.trim().length < 2) {
      return `${fieldName.replace(/([A-Z])/g, ' $1').trim()} must be at least 2 characters`;
    }
    return '';
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

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      newErrors[field] = validateField(field, formData[field]);
    });

    if (Object.values(newErrors).some(err => err)) {
      setFieldErrors(newErrors);
      return;
    }

    setSaving(true);
    try {
      await updateProfile(formData);
      setSuccess('Profile updated successfully!');
      setEditing(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!userProfile) {
    return <div className="alert alert-warning">Profile not found</div>;
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: 540 }}>
      <div className="card-body">
        <h5 className="card-title">Your Profile</h5>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {editing ? (
          <form onSubmit={handleSave}>
            {/* First Name | Last Name Row */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.firstName && fieldErrors.firstName ? 'is-invalid' : ''}`}
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  onBlur={() => handleBlur('firstName')}
                />
                {touched.firstName && fieldErrors.firstName && (
                  <div className="invalid-feedback d-block">{fieldErrors.firstName}</div>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.lastName && fieldErrors.lastName ? 'is-invalid' : ''}`}
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  onBlur={() => handleBlur('lastName')}
                />
                {touched.lastName && fieldErrors.lastName && (
                  <div className="invalid-feedback d-block">{fieldErrors.lastName}</div>
                )}
              </div>
            </div>

            {/* PI First Name | PI Last Name Row */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label className="form-label">PI First Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.piFirstName && fieldErrors.piFirstName ? 'is-invalid' : ''}`}
                  value={formData.piFirstName}
                  onChange={(e) => handleChange('piFirstName', e.target.value)}
                  onBlur={() => handleBlur('piFirstName')}
                />
                {touched.piFirstName && fieldErrors.piFirstName && (
                  <div className="invalid-feedback d-block">{fieldErrors.piFirstName}</div>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <label className="form-label">PI Last Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.piLastName && fieldErrors.piLastName ? 'is-invalid' : ''}`}
                  value={formData.piLastName}
                  onChange={(e) => handleChange('piLastName', e.target.value)}
                  onBlur={() => handleBlur('piLastName')}
                />
                {touched.piLastName && fieldErrors.piLastName && (
                  <div className="invalid-feedback d-block">{fieldErrors.piLastName}</div>
                )}
              </div>
            </div>

            {/* Organization */}
            <div className="mb-3">
              <label className="form-label">Organization *</label>
              <input
                type="text"
                className={`form-control ${touched.organization && fieldErrors.organization ? 'is-invalid' : ''}`}
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                onBlur={() => handleBlur('organization')}
              />
              {touched.organization && fieldErrors.organization && (
                <div className="invalid-feedback d-block">{fieldErrors.organization}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <div className="mb-3">
              <label className="form-label"><strong>Name</strong></label>
              <p>{userProfile.first_name} {userProfile.last_name}</p>
            </div>
            <div className="mb-3">
              <label className="form-label"><strong>Username</strong></label>
              <p>{userProfile.username}</p>
            </div>
            <div className="mb-3">
              <label className="form-label"><strong>Email</strong></label>
              <p>{userProfile.email}</p>
            </div>
            <div className="mb-3">
              <label className="form-label"><strong>PI</strong></label>
              <p>{userProfile.pi_first_name} {userProfile.pi_last_name}</p>
            </div>
            <div className="mb-3">
              <label className="form-label"><strong>Organization</strong></label>
              <p>{userProfile.organization}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}