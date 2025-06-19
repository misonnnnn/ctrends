// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../utils/authService';
import { useAuth } from '../Context/AuthContext';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const { loginSuccess } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password, confirmPassword);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data)
    }
  };

  return (
    <div className="container">
        <div className='row'>
          <div className='col-lg-5 col-12 mx-auto'>
            <div className='py-5 '>
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='form-control form-control-sm mb-2 shadow-none'
                />
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className='form-control form-control-sm mb-2 shadow-none'
                />
                <button className='btn btn-sm w-100 text-light' type="submit" style={{background: '#b17659'}}>Register</button>
                {
                error && Object.entries(error).flatMap(([field, messages]) =>
                    messages.map((msg, i) => (
                        <div key={`${field}-${i}`} className='text-danger mt-2'>
                        {msg}
                        </div>
                    )))
                }
              </form>
            </div>
          </div>          
        </div>
    </div>
  );
};

export default Register;
