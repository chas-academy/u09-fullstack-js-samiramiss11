// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import AdminDashboard from './AdminDashboard';
import UserDashboard  from './UserDashboard';

const  Dashboard= () => {
  const { user } = useContext(AuthContext);
  // If for any reason user is not defined, you could redirect to login here
  return user?.isAdmin
    ? <AdminDashboard />
    : <UserDashboard />;
}
export default Dashboard;