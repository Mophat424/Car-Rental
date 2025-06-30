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
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import RoleProtectedRoute from './components/RoleProtectedRoute';

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
//         <Route path="/verify-user" element={<VerifyUser />} />
//         <Route path="/fetch-car" element={
//           <PrivateRoute>
//             <FetchCarById />
//           </PrivateRoute>
//         } />
//         {/* More table routes */}
//         <Route path="/tables/customers" element={<div>Customers</div>} />
//         <Route path="/tables/cars" element={<div>Cars</div>} />
//         <Route path="/tables/locations" element={<div>Locations</div>} />
//         <Route path="/tables/reservations" element={<div>Reservations</div>} />
//         <Route path="/tables/bookings" element={<div>Bookings</div>} />
//         <Route path="/tables/payments" element={<div>Payments</div>} />
//         <Route path="/tables/maintenance" element={<div>Maintenance</div>} />
//         <Route path="/tables/insurance" element={<div>Insurance</div>} />
//         <Route path="/admin-dashboard"  element={<RoleProtectedRoute requiredRole="admin"><AdminDashboard />    </RoleProtectedRoute>
//   }
// />

// <Route
//   path="/user-dashboard"
//   element={
//     <RoleProtectedRoute requiredRole="user">
//       <UserDashboard />
//     </RoleProtectedRoute>
//   }
// />
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
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import RoleProtectedRoute from './components/RoleProtectedRoute';

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
//         <Route path="/verify-user" element={<VerifyUser />} />

//         <Route
//           path="/fetch-car"
//           element={
//             <PrivateRoute>
//               <FetchCarById />
//             </PrivateRoute>
//           }
//         />

//         {/* Admin Dashboard (Protected by Role) */}
//         <Route
//           path="/admin-dashboard"
//           element={
//             <RoleProtectedRoute requiredRole="admin">
//               <AdminDashboard />
//             </RoleProtectedRoute>
//           }
//         />

//         {/* User Dashboard (Protected by Role) */}
//         <Route
//           path="/user-dashboard"
//           element={
//             <RoleProtectedRoute requiredRole="customer">
//               <UserDashboard />
//             </RoleProtectedRoute>
//           }
//         />

//         {/* Tables */}
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


//GROK
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
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import AdminBookings from './pages/AdminBookings';
// import RoleProtectedRoute from './components/RoleProtectedRoute';
// import UserCarTable from './pages/UserCarTable';
// import NewBooking from './pages/NewBooking';
// import UserBookings from './pages/UserBookings';
// import AdminCarTable from './pages/AdminCarTable';


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

//       <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/verify-user" element={<VerifyUser />} />

//           <Route
//             path="/fetch-car"
//             element={
//               <PrivateRoute>
//                 <FetchCarById />
//               </PrivateRoute>
//             }
//           />

//           {/* Admin Dashboard (Protected by Role) */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminDashboard />
//               </RoleProtectedRoute>
//             }
//           />

//           {/* User Dashboard (Protected by Role) */}
//           <Route
//             path="/user-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserDashboard />
//               </RoleProtectedRoute>
//             }
//           />

//           <Route
//               path="/cars"
//               element={
//                 <RoleProtectedRoute requiredRole="user">
//                   <UserCarTable />
//                 </RoleProtectedRoute>
//               }
//             />

//           {/* Admin Table Routes */}
//           <Route
//             path="/tables/customers"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Customers Table</div>
//               </RoleProtectedRoute>
//             }
//           />
        
//           <Route
//             path="/tables/locations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Locations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/reservations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Reservations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/bookings"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminBookings />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/payments"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Payments Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/maintenance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Maintenance Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/insurance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Insurance Table</div>
//               </RoleProtectedRoute>
//             }
//           />

//                   <Route
//           path="/bookings/new"
//           element={
//             <RoleProtectedRoute requiredRole="user">
//               <NewBooking />
//             </RoleProtectedRoute>
//           }
//         />

//               <Route
//         path="/bookings"
//         element={
//           <RoleProtectedRoute requiredRole="user">
//             <UserBookings />
//           </RoleProtectedRoute>
//         }
//       />

//       <Route
//   path="/tables/cars"
//   element={
//     <RoleProtectedRoute requiredRole="admin">
//       <AdminCarTable />
//     </RoleProtectedRoute>
//   }
// />

//         </Routes>
//       </div>
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
// import RoleProtectedRoute from './components/RoleProtectedRoute';

// // import Landing from './pages/Landing';
// import About from './pages/About';
// import VerifyUser from './pages/VerifyUser';
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import AdminBookings from './pages/AdminBookings';
// import AdminCarTable from './pages/AdminCarTable';
// import UserCarTable from './pages/UserCarTable';
// import NewBooking from './pages/NewBooking';
// import UserBookings from './pages/UserBookings';
// import RoleRedirect from './components/RoleRedirect';

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

//   return (
//     <Router>
//       <Navbar onMenuClick={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div
//         style={{
//           marginLeft: isSidebarOpen ? '250px' : '0',
//           transition: 'margin-left 0.3s ease-in-out',
//         }}
//       >
//         <Routes>
//           {/* Public Routes */}
//           {/* <Route path="/" element={<Landing />} /> */}
//           <Route
//   path="/"
//   element={
//     <RoleRedirect />
//   }
// />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/verify-user" element={<VerifyUser />} />

//           {/* Private Routes */}
//           <Route
//             path="/fetch-car"
//             element={
//               <PrivateRoute>
//                 <FetchCarById />
//               </PrivateRoute>
//             }
//           />

//           {/* Role-Protected Routes */}
//           {/* Admin Routes */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminDashboard />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/cars"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminCarTable />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/bookings"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminBookings />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/customers"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Customers Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/locations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Locations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/reservations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Reservations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/payments"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Payments Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/maintenance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Maintenance Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/insurance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Insurance Table</div>
//               </RoleProtectedRoute>
//             }
//           />

//           {/* User Routes */}
//           <Route
//             path="/user-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserDashboard />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/cars"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserCarTable />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/bookings/new"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <NewBooking />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/bookings"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserBookings />
//               </RoleProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Login from './components/Login';
// import Register from './components/Register';
// import RoleProtectedRoute from './components/RoleProtectedRoute';
// import RoleRedirect from './components/RoleRedirect';
// import Landing from './pages/Landing';
// import About from './pages/About';
// import VerifyUser from './pages/VerifyUser';
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';
// import AdminBookings from './pages/AdminBookings';
// import AdminCarTable from './pages/AdminCarTable';
// import UserCarTable from './pages/UserCarTable';
// import NewBooking from './pages/NewBooking';
// import UserBookings from './pages/UserBookings';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

//   return (
//     <Router>
//       <Navbar onMenuClick={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div
//         style={{
//           marginLeft: isSidebarOpen ? '250px' : '0',
//           transition: 'margin-left 0.3s ease-in-out',
//         }}
//       >
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<RoleRedirect />} />
//           <Route path="/about" element={<About />} />
//            <Route path="/landing" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/verify-user" element={<VerifyUser />} />

//           {/* Admin Routes */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminDashboard />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/cars"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminCarTable />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/bookings"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <AdminBookings />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/customers"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Customers Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/locations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Locations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/reservations"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Reservations Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/payments"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Payments Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/maintenance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Maintenance Table</div>
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/tables/insurance"
//             element={
//               <RoleProtectedRoute requiredRole="admin">
//                 <div>Insurance Table</div>
//               </RoleProtectedRoute>
//             }
//           />

//           {/* User Routes */}
//           <Route
//             path="/user-dashboard"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserDashboard />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/cars"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserCarTable />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/bookings/new"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <NewBooking />
//               </RoleProtectedRoute>
//             }
//           />
//           <Route
//             path="/bookings"
//             element={
//               <RoleProtectedRoute requiredRole="user">
//                 <UserBookings />
//               </RoleProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import About from './pages/About';
import VerifyUser from './pages/VerifyUser';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminCarTable from './pages/AdminCarTable';
import UserCarTable from './pages/UserCarTable';
import NewBooking from './pages/NewBooking';
import UserBookings from './pages/UserBookings';
import Landing from './pages/Landing';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <Router>
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div
        style={{
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-user" element={<VerifyUser />} />

          {/* Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/cars"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <AdminCarTable />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/bookings"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <AdminBookings />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/customers"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Customers Table</div>
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/locations"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Locations Table</div>
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/reservations"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Reservations Table</div>
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/payments"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Payments Table</div>
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/maintenance"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Maintenance Table</div>
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/tables/insurance"
            element={
              <RoleProtectedRoute requiredRole="admin">
                <div>Insurance Table</div>
              </RoleProtectedRoute>
            }
          />

          {/* User Routes */}
          <Route
            path="/user-dashboard"
            element={
              <RoleProtectedRoute requiredRole="user">
                <UserDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/cars"
            element={
              <RoleProtectedRoute requiredRole="user">
                <UserCarTable />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/bookings/new"
            element={
              <RoleProtectedRoute requiredRole="user">
                <NewBooking />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <RoleProtectedRoute requiredRole="user">
                <UserBookings />
              </RoleProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
