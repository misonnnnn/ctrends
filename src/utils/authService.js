// src/services/authService.js
import API from '../utils/axios';

export const login = async (email, password) => {
  const res = await API.post('/login', { email, password });
  localStorage.setItem('token', res.data.token);
  return res.data.user;
};

export const register = async (name, email, password, confirmPassword) => {
  const res = await API.post('/register', { name, email, password, password_confirmation: confirmPassword });
  return res.data;
};

export const logout = async () => {
  try {
    await API.post('/logout')
  } catch {}
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');
export const isLoggedIn = () => !!getToken();
