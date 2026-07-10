import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword(){
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  async function handle(e){
    e.preventDefault();
    setStatus('Sending...');
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email })
      });
      setStatus('If an account exists for that email, a reset link has been sent.');
    } catch (err) {
      setStatus('Error sending reset link. Try again later.');
    }
  }

  return (
    <div className="container py-4">
      <div className="card mx-auto" style={{maxWidth: 480}}>
        <div className="card-body">
          <h3 className="card-title">Forgot password</h3>
          <p className="small text-muted">Enter the email for your account and we'll send a secure link to reset your password.</p>
          <form onSubmit={handle}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <button className="btn btn-primary" type="submit">Send reset link</button>
            <button type="button" className="btn btn-link" onClick={()=>navigate('/login')}>Back to login</button>
          </form>
          {status && <div className="mt-3 alert alert-info">{status}</div>}
        </div>
      </div>
    </div>
  );
}
