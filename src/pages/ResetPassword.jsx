import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPassword(){
  const query = useQuery();
  const token = query.get('token') || '';
  const email = query.get('email') || '';
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const passwordPolicyText = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.';
  const isPasswordStrong = (pw) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pw || '');

  useEffect(()=>{
    if(!token || !email){
      setStatus('Invalid reset link.');
    }
  }, [token, email]);

  async function handle(e){
    e.preventDefault();
    if (!isPasswordStrong(password)) {
      setStatus(passwordPolicyText);
      return;
    }
    setStatus('Resetting password...');
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ token, email, newPassword: password })
      });
      if (!res.ok) {
        const { error } = await res.json().catch(()=>({}));
        throw new Error(error || 'Failed');
      }
      setStatus('Password reset. Redirecting to login...');
      setTimeout(()=>navigate('/login'), 1200);
    } catch (err) {
      setStatus(err.message || 'Invalid or expired token.');
    }
  }

  return (
    <div className="container py-4">
      <div className="card mx-auto" style={{maxWidth:480}}>
        <div className="card-body">
          <h3 className="card-title">Set a new password</h3>
          <form onSubmit={handle}>
            <div className="mb-3">
              <label className="form-label">New password</label>
              <input type="password" minLength={8} className="form-control" required value={password} onChange={e=>setPassword(e.target.value)}/>
              <div className="form-text">{passwordPolicyText}</div>
            </div>
            <button className="btn btn-primary" type="submit">Set password</button>
            <button type="button" className="btn btn-link" onClick={()=>navigate('/login')}>Back to login</button>
          </form>
          {status && <div className="mt-3 alert alert-info">{status}</div>}
        </div>
      </div>
    </div>
  );
}
