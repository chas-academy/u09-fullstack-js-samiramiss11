import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported

// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Manage user state

  // Login function
  const login = (userData) => {
    setUser(userData); // Set user data upon login
  };

  // Logout function
  const logout = () => {
    setUser(null); // Clear user data upon logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Add prop types validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
