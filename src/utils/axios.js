// src/api/axios.js
import axios from 'axios';
import config from '../config';

// Set base URL of your Laravel API
const API = axios.create({
  baseURL: `${config.API_URL}/asos/v1`,
});

// Add token to Authorization header
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
