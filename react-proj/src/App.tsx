// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Login from './components/Login';
// import Register from './components/Register';
// import FetchCarById from './components/FetchCarById';
// import About from './pages/About';
// import Landing from './pages/Landing';

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? <>{children}</> : <Navigate to="/login" />;
// };

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev); // toggle logic
//   };

//   return (
//     <Router>
//       <Navbar onMenuClick={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/fetch-car"
//           element={
//             <PrivateRoute>
//               <FetchCarById />
//             </PrivateRoute>
//           }
//         />
//         {/* Table routes */}
//         <Route path="/tables/customers" element={<div>Customers</div>} />
//         <Route path="/tables/cars" element={<div>Cars</div>} />
//         <Route path="/tables/locations" element={<div>Locations</div>} />
//         <Route path="/tables/reservations" element={<div>Reservations</div>} />
//         <Route path="/tables/bookings" element={<div>Bookings</div>} />
//         <Route path="/tables/payments" element={<div>Payments</div>} />
//         <Route path="/tables/maintenance" element={<div>Maintenance</div>} />
//         <Route path="/tables/insurance" element={<div>Insurance</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from './store';

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Login from './components/Login';
// import Register from './components/Register';
// import FetchCarById from './components/FetchCarById';
// import About from './pages/About';
// import Landing from './pages/Landing';
// import VerifyUser from './pages/VerifyUser';



// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

//   return (
//     <Router>
//       <Navbar onMenuClick={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/fetch-car" element={<PrivateRoute>
//               <FetchCarById />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/verify-user" element={<VerifyUser />} />

//         {/* Table routes */}
//         <Route path="/tables/customers" element={<div>Customers</div>} />
//         <Route path="/tables/cars" element={<div>Cars</div>} />
//         <Route path="/tables/locations" element={<div>Locations</div>} />
//         <Route path="/tables/reservations" element={<div>Reservations</div>} />
//         <Route path="/tables/bookings" element={<div>Bookings</div>} />
//         <Route path="/tables/payments" element={<div>Payments</div>} />
//         <Route path="/tables/maintenance" element={<div>Maintenance</div>} />
//         <Route path="/tables/insurance" element={<div>Insurance</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import FetchCarById from './components/FetchCarById';
import About from './pages/About';
import Landing from './pages/Landing';
import VerifyUser from './pages/VerifyUser';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <Router>
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-user" element={<VerifyUser />} />
        <Route path="/fetch-car" element={
          <PrivateRoute>
            <FetchCarById />
          </PrivateRoute>
        } />
        {/* More table routes */}
        <Route path="/tables/customers" element={<div>Customers</div>} />
        <Route path="/tables/cars" element={<div>Cars</div>} />
        <Route path="/tables/locations" element={<div>Locations</div>} />
        <Route path="/tables/reservations" element={<div>Reservations</div>} />
        <Route path="/tables/bookings" element={<div>Bookings</div>} />
        <Route path="/tables/payments" element={<div>Payments</div>} />
        <Route path="/tables/maintenance" element={<div>Maintenance</div>} />
        <Route path="/tables/insurance" element={<div>Insurance</div>} />
      </Routes>
    </Router>
  );
}

export default App;
