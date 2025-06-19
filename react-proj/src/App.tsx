// import React from 'react';
// import CarList from './components/FetchCarById';

// function App() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Car Management</h1>
//       <CarList />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import FetchCarById from './components/FetchCarById';

// function App() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Car Management</h1>
//       <FetchCarById />
//     </div>
//   );
// }

// export default App;








// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Register from './components/Register';
// import About from './pages/About';
// import Landing from './pages/Landing';
// import FetchCarById from './components/FetchCarById';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow p-4">
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/car" element={<FetchCarById />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import FetchCarById from './components/FetchCarById';
// import Navbar from './components/Navbar';
// import About from './pages/About';
// import Landing from './pages/Landing';

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/fetch-car"
//           element={
//             <PrivateRoute>
//               <FetchCarById />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'; 
import Login from './components/Login';
import Register from './components/Register';
import FetchCarById from './components/FetchCarById';
import Navbar from './components/Navbar';
import About from './pages/About';
import Landing from './pages/Landing';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/fetch-car"
          element={
            <PrivateRoute>
              <FetchCarById />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;





