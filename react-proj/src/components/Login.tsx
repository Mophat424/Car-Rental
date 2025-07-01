// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../store/slices/authSlice';
// import '../index.css';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch('http://localhost:3001/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.error || 'Login failed');

//       dispatch(loginSuccess({ token: data.token, user: data.user }));

//       // Redirect based on user role
//       if (data.user.role === 'admin') {
//         navigate('/admin-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }
//     } catch (err: unknown) {
//       if (err instanceof Error) setError(err.message);
//       else setError('An unknown error occurred.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">Error: {error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { loginUser, clearError } from '../store/slices/authSlice';

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
// const { error, user, isAuthenticated } = useAppSelector((state) => state.auth);  
const { error } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(result)) {
      if (result.payload.user.role === 'admin') navigate('/admin-dashboard');
      else navigate('/user-dashboard');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        {error && <p className="error">Error: {error}</p>}
      </form>
    </div>
  );
};

export default Login;



