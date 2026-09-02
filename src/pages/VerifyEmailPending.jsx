// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function VerifyEmailPending() {
//   const location = useLocation();
//   const nav = useNavigate();
//   const email = location.state?.email || 'your email';

//   return (
//     <div className="card mx-auto" style={{ maxWidth: 500, marginTop: '50px' }}>
//       <div className="card-body">
//         <h5 className="card-title">Verify Your Email</h5>
//         <div className="alert alert-info">
//           <p>A verification email has been sent to:</p>
//           <p><strong>{email}</strong></p>
//           <p>Please click the link in the email to verify your account.</p>
//           <p className="mb-0 text-muted" style={{ fontSize: '0.9em' }}>
//             The link will expire in 24 hours.
//           </p>
//         </div>
//         <div className="alert alert-secondary">
//           <p className="mb-0">
//             <strong>Didn't receive the email?</strong>
//           </p>
//           <p className="mb-0 text-muted">
//             Check your spam folder or try registering again with a different email address.
//           </p>
//         </div>
//         <button 
//           className="btn btn-secondary w-100"
//           onClick={() => nav('/login')}
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerifyEmailPending() {
  const location = useLocation();
  const nav = useNavigate();
  const email = location.state?.email || 'your email';

  return (
    <div className="card mx-auto" style={{ maxWidth: 500, marginTop: '50px' }}>
      <div className="card-body">
        <h5 className="card-title">Verify Your Email</h5>
        <div className="alert alert-info">
          <p>A verification email has been sent to:</p>
          <p><strong>{email}</strong></p>
          <p>Please click the link in the email to verify your account.</p>
          <p className="mb-0 text-muted" style={{ fontSize: '0.9em' }}>
            The link will expire in 24 hours.
          </p>
        </div>
        <div className="alert alert-secondary">
          <p className="mb-0">
            <strong>Didn't receive the email?</strong>
          </p>
          <p className="mb-0 text-muted">
            Check your spam folder or try registering again with a different email address.
          </p>
        </div>
        <button 
          className="btn btn-secondary w-100"
          onClick={() => nav('/login')}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}