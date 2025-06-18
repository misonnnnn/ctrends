// src/api/axios.js
import axios from 'axios';
import config from '../config';

const API = axios.create({
  baseURL: `${config.API_URL}/api/asos/v1`,
});

// Add header
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    // config.headers.Authorization = `Bearer test`;
  }
  return config;
});

export default API;

