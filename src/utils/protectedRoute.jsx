// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './authService';

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
