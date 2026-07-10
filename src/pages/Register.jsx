// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext.jsx';

// export default function Register(){
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { register } = useContext(AuthContext);
//   const nav = useNavigate();

//   async function handle(e){
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await register({ username, email, password });
//       if(res.token){
//         nav('/');
//       } else {
//         setError(res.error || 'Registration failed');
//       }
//     } catch(err){
//       setError('Registration failed');
//     }
//   }

//   return (
//     <div className="card mx-auto" style={{maxWidth: 540}}>
//       <div className="card-body">
//         <h5 className="card-title">Create an account</h5>
//         <form onSubmit={handle}>
//           <div className="mb-2">
//             <label className="form-label">Username</label>
//             <input value={username} onChange={e=>setUsername(e.target.value)} className="form-control" />
//           </div>
//           <div className="mb-2">
//             <label className="form-label">Email (optional)</label>
//             <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
//           </div>
//           <div className="mb-2">
//             <label className="form-label">Password</label>
//             <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <button className="btn btn-primary">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }


// client/src/pages/Register.jsx
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

  const passwordPolicyText = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.';
  const isPasswordStrong = (pw) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pw || '');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!isPasswordStrong(password)) {
        throw new Error(passwordPolicyText);
      }
      // register accepts (username, password, email) or an object depending on your AuthContext
      await register(username.trim(), password, email.trim() || undefined);
      // success — navigate or show success
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
          <div className="mb-2">
            <label className="form-label">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Email (optional)</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
            <div className="form-text">{passwordPolicyText}</div>
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Registering…' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
