// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between">
//       <h1 className="text-xl font-bold">Car Manager</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/car">Find Car</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        {token && <Link to="/fetch-car">Find Car</Link>}
      </div>
      <div>
        {!token ? (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

