// // components/Sidebar.tsx
// import { Link, useLocation } from 'react-router-dom';
// import '../index.css';

// const Sidebar = () => {
//   const location = useLocation();

//   const tables = [
//     'customers',
//     'cars',
//     'locations',
//     'reservations',
//     'bookings',
//     'payments',
//     'maintenance',
//     'insurance',
//   ];

//   return (
//     <aside style={{
//       width: '200px',
//       backgroundColor: '#2c3e50',
//       padding: '1rem',
//       height: '100vh',
//       color: 'white',
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       overflowY: 'auto'
//     }}>
//       <h3 style={{ color: '#f39c12', marginBottom: '1.5rem' }}>Data Tables</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {tables.map((table) => (
//           <li key={table} style={{ marginBottom: '1rem' }}>
//             <Link
//               to={`/table/${table}`}
//               style={{
//                 color: location.pathname.includes(`/table/${table}`) ? '#f1c40f' : 'white',
//                 textDecoration: 'none'
//               }}
//             >
//               {table.charAt(0).toUpperCase() + table.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;







// // components/Sidebar.tsx
// import { Link } from 'react-router-dom';
// import React from 'react';

// const Sidebar: React.FC = () => {
//   return (
//     <div style={{
//       width: '200px',
//       backgroundColor: '#1b2a41',
//       color: '#f8f9fa',
//       padding: '1rem',
//       minHeight: '100vh',
//       position: 'sticky',
//       top: 0
//     }}>
//       <h3 style={{ color: '#ffc107', marginBottom: '2rem' }}>Menu</h3>
//       <nav>
//         <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
//           <li><Link to="/" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Home</Link></li>
//           <li><Link to="/about" style={{ color: '#f8f9fa', textDecoration: 'none' }}>About</Link></li>
//           <li><Link to="/fetch-car" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Find Car</Link></li>
//           <li><Link to="/tables" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Data Tables</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



// // components/Sidebar.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         right: isOpen ? 0 : '-250px',
//         height: '100%',
//         width: '250px',
//         backgroundColor: '#2c3e50',
//         color: 'white',
//         transition: 'right 0.3s ease-in-out',
//         padding: '1rem',
//         zIndex: 999,
//       }}
//     >
//       <button
//         onClick={onClose}
//         style={{ background: 'none', color: 'white', border: 'none', fontSize: '1.2rem', float: 'right' }}
//       >
//         ✖
//       </button>

//       <h3 style={{ marginTop: '2rem' }}>Tables</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         <li><Link to="/tables/customers" style={linkStyle}>Customers</Link></li>
//         <li><Link to="/tables/cars" style={linkStyle}>Cars</Link></li>
//         <li><Link to="/tables/locations" style={linkStyle}>Locations</Link></li>
//         <li><Link to="/tables/reservations" style={linkStyle}>Reservations</Link></li>
//         <li><Link to="/tables/bookings" style={linkStyle}>Bookings</Link></li>
//         <li><Link to="/tables/payments" style={linkStyle}>Payments</Link></li>
//         <li><Link to="/tables/maintenance" style={linkStyle}>Maintenance</Link></li>
//         <li><Link to="/tables/insurance" style={linkStyle}>Insurance</Link></li>
//       </ul>
//     </div>
//   );
// };

// const linkStyle: React.CSSProperties = {
//   color: 'white',
//   textDecoration: 'none',
//   display: 'block',
//   margin: '1rem 0',
// };

// export default Sidebar;




// components/Sidebar.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: isOpen ? 0 : '-250px', // slide in from left
//         width: '250px',
//         height: '100%',
//         backgroundColor: '#343a40',
//         color: 'white',
//         transition: 'left 0.3s ease-in-out',
//         zIndex: 1000,
//         paddingTop: '60px'
//       }}
//     >
//       <button
//         onClick={onClose}
//         style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           background: 'none',
//           color: 'white',
//           border: 'none',
//           fontSize: '1.2rem',
//           cursor: 'pointer'
//         }}
//       >
//         ×
//       </button>

//     <ul style={{ listStyle: 'none', padding: 0 }}>
//   <li><Link to="/tables/customers" style={linkStyle} onClick={onClose}>Customers</Link></li>
//   <li><Link to="/tables/cars" style={linkStyle} onClick={onClose}>Cars</Link></li>
//   <li><Link to="/tables/locations" style={linkStyle} onClick={onClose}>Locations</Link></li>
//   <li><Link to="/tables/reservations" style={linkStyle} onClick={onClose}>Reservations</Link></li>
//   <li><Link to="/tables/bookings" style={linkStyle} onClick={onClose}>Bookings</Link></li>
//   <li><Link to="/tables/payments" style={linkStyle} onClick={onClose}>Payments</Link></li>
//   <li><Link to="/tables/maintenance" style={linkStyle} onClick={onClose}>Maintenance</Link></li>
//   <li><Link to="/tables/insurance" style={linkStyle} onClick={onClose}>Insurance</Link></li>
// </ul>

//     </div>
//   );
// };

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   display: 'block',
//   padding: '10px 20px'
// };

// export default Sidebar;







// //GROK
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const { user } = useSelector((state: RootState) => state.auth);

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: isOpen ? 0 : '-250px',
//         width: '250px',
//         height: '100%',
//         backgroundColor: '#343a40',
//         color: 'white',
//         transition: 'left 0.3s ease-in-out',
//         zIndex: 1000,
//         paddingTop: '60px',
//       }}
//     >
//       <button
//         onClick={onClose}
//         style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           background: 'none',
//           color: 'white',
//           border: 'none',
//           fontSize: '1.2rem',
//           cursor: 'pointer',
//         }}
//       >
//         ×
//       </button>

//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {user?.role === 'admin' ? (
//           <>
//             <li><Link to="/tables/customers" style={linkStyle} onClick={onClose}>Customers</Link></li>
//             <li><Link to="/tables/cars" style={linkStyle} onClick={onClose}>Cars</Link></li>
//             <li><Link to="/tables/locations" style={linkStyle} onClick={onClose}>Locations</Link></li>
//             <li><Link to="/tables/reservations" style={linkStyle} onClick={onClose}>Reservations</Link></li>
//             <li><Link to="/tables/bookings" style={linkStyle} onClick={onClose}>All Bookings</Link></li>
//             <li><Link to="/tables/payments" style={linkStyle} onClick={onClose}>Payments</Link></li>
//             <li><Link to="/tables/maintenance" style={linkStyle} onClick={onClose}>Maintenance</Link></li>
//             <li><Link to="/tables/insurance" style={linkStyle} onClick={onClose}>Insurance</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/user-dashboard" style={linkStyle} onClick={onClose}>My Dashboard</Link></li>
//             <li><Link to="/bookings" style={linkStyle} onClick={onClose}>My Bookings</Link></li>
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   display: 'block',
//   padding: '10px 20px',
// };

// export default Sidebar;





import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 0 : '-250px',
        width: '250px',
        height: '100%',
        backgroundColor: '#343a40',
        color: 'white',
        transition: 'left 0.3s ease-in-out',
        zIndex: 1000,
        paddingTop: '60px',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          color: 'white',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
      >
        ×
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {user?.role === 'admin' ? (
          <>
            <li><Link to="/tables/customers" style={linkStyle} onClick={onClose}>Customers</Link></li>
            <li><Link to="/tables/cars" style={linkStyle} onClick={onClose}>Cars</Link></li>
            <li><Link to="/tables/locations" style={linkStyle} onClick={onClose}>Locations</Link></li>
            <li><Link to="/tables/reservations" style={linkStyle} onClick={onClose}>Reservations</Link></li>
            <li><Link to="/tables/bookings" style={linkStyle} onClick={onClose}>All Bookings</Link></li>
            <li><Link to="/tables/payments" style={linkStyle} onClick={onClose}>Payments</Link></li>
            <li><Link to="/tables/maintenance" style={linkStyle} onClick={onClose}>Maintenance</Link></li>
            <li><Link to="/tables/insurance" style={linkStyle} onClick={onClose}>Insurance</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/user-dashboard" style={linkStyle} onClick={onClose}>My Dashboard</Link></li>
            <li><Link to="/cars" style={linkStyle} onClick={onClose}>View Cars</Link></li>
            <li><Link to="/bookings/new" style={linkStyle} onClick={onClose}>Book a Car</Link></li>
            <li><Link to="/bookings" style={linkStyle} onClick={onClose}>My Bookings</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  padding: '10px 20px',
};

export default Sidebar;
