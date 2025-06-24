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


import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav style={{
      backgroundColor: '#343a40',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1001
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaBars onClick={onMenuClick} style={{ cursor: 'pointer', marginRight: '1rem' }} />
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
      <div>
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  marginRight: '1rem',
  textDecoration: 'none'
};

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer'
};

export default Navbar;

