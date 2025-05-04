/* eslint-disable react/jsx-no-undef */
// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react'
import ManageContent from './ManageContent'
import ManageUsers from './ManageUsers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import API from '../utils/api'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { fetchSaved, removeSaved } from '../utils/api'


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('content')
  const [userInfo, setUserInfo]   = useState({})
  const [loading, setLoading]     = useState(true)
  const [savedContent, setSavedContent] = useState([])

  useEffect(() => {
    // grab user from localStorage (or call /api/users/profile)
    const stored = JSON.parse(localStorage.getItem('user') || '{}')
    setUserInfo(stored)
    setLoading(false)
    // fetch saved content
    fetchSaved()
      .then(items => setSavedContent(items))
      .catch(console.error)
  }, [])

  const formatDate = (d) =>
    d ? new Date(d).toLocaleString() : 'N/A'

  const handleDeleteAccount = async () => {
    if (!confirm('Really delete your own admin account?')) return
    try {
      await API.deleteUser(userInfo.id, localStorage.getItem('token'))
      localStorage.clear()
      window.location.href = '/'
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }
    // remove one saved item
    const removeSavedContent = async (savedId) => {
      try {
        await removeSaved(savedId);            // use the correct helper
        setSavedContent(sc => sc.filter(i => i._id !== savedId));
      } catch (err) {
        console.error('Failed to remove saved', err);
        alert('Could not remove saved content');
      }
    };

  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-bg ">
      <Header />

      <div className="max-w-[1150px] bg-white container mx-auto p-4 py-8 shadow-primary rounded-md md:mt-16 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-6 text-left pl-4">
          Admin Dashboard
        </h2>

        {/* Tabs */}
        <div className="flex  mb-6 border-b  pb-2 ">

          <button
            className={` px-4 py-2 ${
              activeTab === 'users'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('users')}
          >
            Manage Users
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'account'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('account')}
          >
            Account Info
          </button>

          
          <button
            className={`px-4 py-2 ${
              activeTab === 'content'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('content')}
          >
            Manage Content
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'saved'
                ? 'border-b-2 border-button text-button bg-gray-200'
                : ''
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Content
          </button>
        </div>

        {/* Tab Panels */}
        <div className="p-4 border rounded-md shadow-sm md">
          {activeTab === 'content' && <ManageContent />}

          {activeTab === 'users' && <ManageUsers />}

          {activeTab === 'account' && (
            loading ? (
              <p>Loading…</p>
            ) : (
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
            )
          )}
                    {/* Saved Content Tab */}
                    {activeTab === 'saved' && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Saved Content</h2>
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
                                  onClick={() => removeSavedContent(item._id)}
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
  )
}

export default AdminDashboard
