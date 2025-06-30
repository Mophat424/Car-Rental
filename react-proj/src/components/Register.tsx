// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../index.css';

// const Register: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState(''); 
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch('http://localhost:3001/users/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, name, role }), 
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.error || 'Registration failed');

//       //  Redirect to verification page with email
//       navigate(`/verify-user?email=${encodeURIComponent(email)}`);
//     } catch (err: unknown) {
//       if (err instanceof Error) setError(err.message);
//       else setError('Unexpected error');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           required
//           onChange={(e) => setName(e.target.value)}
//         />
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
        
//         {/* Role Dropdown */}
//         <select value={role} onChange={(e) => setRole(e.target.value)} required>
//           <option value="">Select Role</option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit">Register</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;











import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { registerUser, clearError } from '../store/slices/authSlice';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: '' });
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      navigate(`/verify-user?email=${encodeURIComponent(form.email)}`);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <select name="role" required onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" disabled={loading}>Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;

