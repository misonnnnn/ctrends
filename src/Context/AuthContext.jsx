// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { isLoggedIn, getToken, logout as doLogout } from '../utils/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(isLoggedIn());

  const logout = async () => {
    setIsLogin(false);
    await doLogout();
  };

  const loginSuccess = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    const sync = () => setIsLogin(isLoggedIn());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, loginSuccess, logout, token: getToken() }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
