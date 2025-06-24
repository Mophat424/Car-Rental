// // src/components/VerifyUser.tsx
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const VerifyUser: React.FC = () => {
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();

//   const email = new URLSearchParams(location.search).get('email');

//   const handleVerify = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('http://localhost:3001/users/verify', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.error || 'Verification failed');

//       setSuccess('Email verified successfully! Redirecting to login...');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err: unknown) {
//       if (err instanceof Error) setError(err.message);
//       else setError('An unknown error occurred');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Verify Your Email</h2>
//       <p>We sent a 6-digit code to your email: <strong>{email}</strong></p>
//       <form onSubmit={handleVerify}>
//         <input
//           type="text"
//           placeholder="Enter 6-digit OTP"
//           value={otp}
//           required
//           maxLength={6}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <button type="submit">Verify</button>
//         {error && <p className="error">{error}</p>}
//         {success && <p style={{ color: 'green' }}>{success}</p>}
//       </form>
//     </div>
//   );
// };

// export default VerifyUser;



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyUser: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const email = new URLSearchParams(location.search).get('email');

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:3001/users/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Verification failed');

      setSuccess('Email verified successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError('An unknown error occurred');
    }
  };

  return (
    <div className="container">
      <h2>Verify Your Email</h2>
      <p>We sent a 6-digit code to your email: <strong>{email}</strong></p>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          required
          maxLength={6}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify</button>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default VerifyUser;
