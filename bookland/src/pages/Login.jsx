import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api'; // Adjusted path to match your structure
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/auth/login', { email: loginEmail, password: loginPassword });
      localStorage.setItem('token', response.data.token);
      navigate('/');
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/auth/signup', { name: registerName, email: registerEmail, password: registerPassword });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to signup');
    }
  };

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  const handleForgotPassword = async () => {
    if (loginEmail) {
      try {
        const response = await API.post('/auth/forgot-password', { email: loginEmail });
        alert(response.data.message);
        navigate('/reset-password');
      } catch (error) {
        alert('Email does not exist, please sign up');
      }
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div><Header />
    <div className="shadow-secondary flex justify-center items-center pt-8 pb-9 bg-primary">
      
      <div className="w-full max-w-xs p-8 bg-primary shadow-secondary rounded-2xl">
        <div className="flex justify-between mb-4 p-6">
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 0 ? "bg-secondary text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => handleTabChange(0)}
          >
            LOG IN
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 1 ? "bg-secondary text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => handleTabChange(1)}
          >
            SIGN UP
          </button>
        </div>
        {activeTab === 0 && (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              autoComplete="current-password"
            />
            <div className='text-center'>
              <button type="submit" className="w-full text-text bg-secondary border-0 py-2 px-6 focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg mt-3.5">
                Sign In
              </button>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-gray-400 hover:text-gray-700 pt-5"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        )}
        {activeTab === 1 && (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              autoComplete="name"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div className='text-center'>
              <button type="submit" className="w-full text-text bg-secondary border-0 py-2 px-6 focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Login;
