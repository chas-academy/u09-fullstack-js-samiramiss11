// src/pages/UserDashboard.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../utils/api';
import AuthContext from '../context/AuthContext';
const UserDashboard = () => {
  const { savedContent, removeSavedContent } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('info');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    isAdmin: false,
    createdAt: '',
  });

  // Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserInfo({
        name: storedUser.name,
        email: storedUser.email,
        isAdmin: storedUser.isAdmin,
        createdAt: storedUser.createdAt,
      });
    }
  }, []);

  // Format the date
  const formatDate = (date) =>
    date ? new Date(date).toLocaleString() : 'N/A';

  const handleDeleteAccount = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');
      await API.deleteUser(user.id, token);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      alert('Account deleted successfully.');
      window.location.href = '/';
    } catch (error) {
      console.error(
        'Delete error:',
        error.response?.data?.message || error.message
      );
      alert('Failed to delete account.');
    }
  };

  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-bg ">
      <Header />
      <h2 className="text-4xl font-bold text-gray-800 mt-10 mb-6 text-center">
          User Dashboard
        </h2>
        <div className="w-full max-w-[1200px] bg-white container mx-auto px-4 py-8 shadow-primary  rounded-md">

        
        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-6 border-b pb-2">
          <button
            className={`px-4 py-2 ${
              activeTab === 'info'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('info')}
          >
            Account Info
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'saved'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Books
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 border rounded-md shadow-sm">
          {/* Account Info Tab */}
          {activeTab === 'info' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Account Information
              </h2>
              <p>
                <strong>Name:</strong> {userInfo.name || 'N/A'}
              </p>
              <p>
                <strong>Email:</strong> {userInfo.email || 'N/A'}
              </p>
              <p>
                <strong>Created:</strong> {formatDate(userInfo.createdAt)}
              </p>
              <button
                  className="mt-4 px-4 py-2 bg-button text-white rounded hover:bg-red-600"
                  onClick={handleDeleteAccount}
              >
                Deactivate Account
              </button>
            </div>
          )}

          {/* Saved Content Tab */}
          {activeTab === 'saved' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Saved Books</h2>
              {savedContent.length > 0 ? (
                <ul className="space-y-4">
                  {savedContent.map((item) => (
                    <li
                      key={item._id}
                      className="flex items-center justify-between"
                    >
                      <Link
                        to={item.link}
                        className="text-gray-800 hover:text-blue-500"
                      >
                        {item.title} ({item.type})
                      </Link>
                      <button
                                  className="mt-2 px-4 py-2 bg-button text-xs text-white rounded hover:bg-red-600"
                                  onClick={() =>
                          removeSavedContent({
                            type: item.type,
                            itemId: item.itemId,
                          })
                        }
                      >
                       remove
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No saved content yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default UserDashboard;
