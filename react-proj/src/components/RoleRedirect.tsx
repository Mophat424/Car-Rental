import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RoleRedirect: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role === 'admin') {
    return <Navigate to="/admin-dashboard" />;
  }

  if (user?.role === 'user') {
    return <Navigate to="/user-dashboard" />;
  }

  return <Navigate to="/login" />;
};

export default RoleRedirect;
