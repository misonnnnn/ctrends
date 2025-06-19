// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/authService';
import { useAuth } from '../Context/AuthContext';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { loginSuccess } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      loginSuccess();
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
        <div className='row'>
          <div className='col-lg-5 col-12 mx-auto'>
            <div className='py-5 '>
              <h2>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='form-control form-control-sm mb-2 shadow-none'
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='form-control form-control-sm mb-2 shadow-none'
                />
                <button className='btn btn-sm w-100 text-light' type="submit" style={{background: '#b17659'}}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </form>

              <p className='text-muted m-0 p-0 mt-2'>
                No account? 
                <Link to ="/register"> Register here</Link>
              </p>
            </div>
          </div>          
        </div>
    </div>
  );
};

export default Login;
