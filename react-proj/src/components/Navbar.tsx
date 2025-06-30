// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
//   const token = localStorage.getItem('token');

//   return (
//     <nav style={{
//       backgroundColor: '#343a40',
//       color: 'white',
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1001
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <FaBars
//           onClick={onMenuClick}
//           style={{ cursor: 'pointer', marginRight: '1rem' }}
//         />
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/about" style={linkStyle}>About</Link>
//       </div>
//       <div>
//         {!token ? (
//           <>
//             <Link to="/login" style={linkStyle}>Login</Link>
//             <Link to="/register" style={linkStyle}>Register</Link>
//           </>
//         ) : (
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               window.location.href = '/login';
//             }}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: 'white',
//               cursor: 'pointer'
//             }}
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// const linkStyle: React.CSSProperties = {
//   color: 'white',
//   marginRight: '1rem',
//   textDecoration: 'none'
// };

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { logout } from '../store/slices/authSlice';

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav style={{
//       backgroundColor: '#343a40',
//       color: 'white',
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1001
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <FaBars onClick={onMenuClick} style={{ cursor: 'pointer', marginRight: '1rem' }} />
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/about" style={linkStyle}>About</Link>
//       </div>
//       <div>
//         {!isAuthenticated ? (
//           <>
//             <Link to="/login" style={linkStyle}>Login</Link>
//             <Link to="/register" style={linkStyle}>Register</Link>
//           </>
//         ) : (
//           <button onClick={handleLogout} style={buttonStyle}>
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// const linkStyle: React.CSSProperties = {
//   color: 'white',
//   marginRight: '1rem',
//   textDecoration: 'none'
// };

// const buttonStyle: React.CSSProperties = {
//   background: 'none',
//   border: 'none',
//   color: 'white',
//   cursor: 'pointer'
// };

// export default Navbar;















// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { logout } from '../store/slices/authSlice';

// const Navbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/');
//   };

//   const handleRoleSwitch = (role: string) => {
//     if (user) {
//       dispatch({ type: 'auth/loginSuccess', payload: { ...user, role } });
//       navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
//     }
//   };

//   return (
//     <nav style={{ backgroundColor: '#343a40', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <FaBars onClick={onMenuClick} style={{ cursor: 'pointer', marginRight: '1rem' }} />
//         <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
//         <Link to="/about" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>About</Link>
//       </div>
//       <div>
//         {isAuthenticated && user && (
//           <select value={user.role} onChange={(e) => handleRoleSwitch(e.target.value)} style={{ marginRight: '1rem' }}>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         )}
//         {!isAuthenticated ? (
//           <>
//             <Link to="/login" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Login</Link>
//             <Link to="/register" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Register</Link>
//           </>
//         ) : (
//           <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleRoleSwitch = (role: string) => {
    if (user) {
      dispatch({ type: 'auth/loginSuccess', payload: { ...user, role } });
      navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
    }
  };

  return (
    <nav
      style={{
        backgroundColor: '#343a40',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaBars
          onClick={onMenuClick}
          style={{ cursor: 'pointer', marginRight: '1rem' }}
          title="Toggle Sidebar"
        />
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isAuthenticated && user && (
          <select
            value={user.role}
            onChange={(e) => handleRoleSwitch(e.target.value)}
            style={{
              marginRight: '1rem',
              padding: '0.3rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
            title="Switch Role"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        )}

        {!isAuthenticated ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: '1px solid white',
              color: 'white',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: 'white',
  marginRight: '1rem',
  textDecoration: 'none',
  fontWeight: 500,
};

export default Navbar;
