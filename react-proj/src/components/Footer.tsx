// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-3 mt-4">
//       &copy; {new Date().getFullYear()} Car Management System
//     </footer>
//   );
// };

// // export default Footer;








import React from 'react';
import '../index.css';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#343a40',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Car Management System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

