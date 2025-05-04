/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
// ProtectedRoute Component
const ProtectedRoute = ({ element }) => {
const { user } = useContext(AuthContext)
  return user ? element : <Navigate to="/login" replace />
}

export default ProtectedRoute;
