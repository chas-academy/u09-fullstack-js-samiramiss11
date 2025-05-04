import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      if (response.data.user.isAdmin) {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data.message || 'Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/signup', {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      });

      alert('Registration successful! Please log in.');
      setActiveTab(0);
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.response?.data.message || 'Registration failed');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center py-10 px-4 min-h-[600px]">
        <div className="max-w-md w-full">
          <div className="p-8 bg-white rounded-2xl shadow">
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setActiveTab(0)}
                className={`px-4 py-2 rounded font-medium ${
                  activeTab === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-4 py-2 rounded font-medium ${
                  activeTab === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            {activeTab === 0 ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="text-sm font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="text-sm font-medium block mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
