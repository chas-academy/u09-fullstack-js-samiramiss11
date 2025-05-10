// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import AdminDashboard from './AdminDashboard';
import UserDashboard  from './UserDashboard';

const  Dashboard= () => {
  const { user } = useContext(AuthContext);
  
  return user?.isAdmin
    ? <AdminDashboard />
    : <UserDashboard />;
}
export default Dashboard;