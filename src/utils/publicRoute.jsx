// src/utils/publicRoute.js
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './authService';

const PublicRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
