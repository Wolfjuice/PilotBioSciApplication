// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import { API_BASE_URL } from '../api';

// export default function VerifyEmail() {
//   const [searchParams] = useSearchParams();
//   const [loading, setLoading] = useState(true);
//   const [verified, setVerified] = useState(false);
//   const [error, setError] = useState('');
//   const nav = useNavigate();

//   useEffect(() => {
//     async function verifyEmail() {
//       try {
//         const token = searchParams.get('token');
//         const email = searchParams.get('email');

//         if (!token || !email) {
//           setError('Invalid verification link');
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           credentials: 'include',
//           body: JSON.stringify({ token, email })
//         });

//         if (!response.ok) {
//           const data = await response.json();
//           throw new Error(data.error || 'Verification failed');
//         }

//         setVerified(true);
//         setLoading(false);
        
//         // Redirect to login after 3 seconds
//         setTimeout(() => {
//           nav('/login');
//         }, 3000);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     }

//     verifyEmail();
//   }, [searchParams, nav]);

//   return (
//     <div className="card mx-auto" style={{ maxWidth: 500, marginTop: '50px' }}>
//       <div className="card-body text-center">
//         {loading && (
//           <>
//             <h5 className="card-title">Verifying Email...</h5>
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </>
//         )}

//         {verified && !error && (
//           <>
//             <h5 className="card-title text-success">✓ Email Verified!</h5>
//             <p>Your email has been verified successfully.</p>
//             <p className="text-muted">Redirecting to login...</p>
//           </>
//         )}

//         {error && (
//           <>
//             <h5 className="card-title text-danger">Verification Failed</h5>
//             <p className="text-danger">{error}</p>
//             <button 
//               className="btn btn-primary"
//               onClick={() => nav('/login')}
//             >
//               Back to Login
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    async function verifyEmail() {
      try {
        const token = searchParams.get('token');
        const email = searchParams.get('email');

        if (!token || !email) {
          setError('Invalid verification link');
          setLoading(false);
          return;
        }

        // FIXED: Include /api in the path
        const response = await fetch(`/api/auth/verify-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ token, email })
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Verification failed');
        }

        setVerified(true);
        setLoading(false);
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          nav('/login');
        }, 3000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    verifyEmail();
  }, [searchParams, nav]);

  return (
    <div className="card mx-auto" style={{ maxWidth: 500, marginTop: '50px' }}>
      <div className="card-body text-center">
        {loading && (
          <>
            <h5 className="card-title">Verifying Email...</h5>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        )}

        {verified && !error && (
          <>
            <h5 className="card-title text-success">✓ Email Verified!</h5>
            <p>Your email has been verified successfully.</p>
            <p className="text-muted">Redirecting to login...</p>
          </>
        )}

        {error && (
          <>
            <h5 className="card-title text-danger">Verification Failed</h5>
            <p className="text-danger">{error}</p>
            <button 
              className="btn btn-primary"
              onClick={() => nav('/login')}
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}