// // RoleProtectedRoute.tsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const RoleProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole: string }) => {
//   const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

//   if (!isAuthenticated) return <Navigate to="/login" />;
//   if (role !== requiredRole) return <Navigate to="/" />;

//   return children;
// };

// export default RoleProtectedRoute;



// RoleProtectedRoute.tsx



// import React, { ReactElement } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const RoleProtectedRoute = ({
//   children,
//   requiredRole,
// }: {
//   children: ReactElement;
//   requiredRole: string;
// }) => {
//   const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

//   if (!isAuthenticated) return <Navigate to="/login" />;
//   if (user?.role !== requiredRole) return <Navigate to="/" />;

//   return children;
// };

// export default RoleProtectedRoute;















import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RoleProtectedRoute: React.FC<{
  children: ReactElement;
  requiredRole: string;
}> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user?.role !== requiredRole) return <Navigate to="/" />;

  return children; // Render the single child
};

export default RoleProtectedRoute;