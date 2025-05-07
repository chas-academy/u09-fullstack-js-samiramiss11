/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import API from '../utils/api';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });
  const [savedContent, setSavedContent] = useState([]);

  useEffect(() => {
    if (user) {
      API.fetchSaved()
        .then(sc => setSavedContent(sc))
        .catch(console.error);
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const addSavedContent = async (item) => {
        const updated = await API.addSaved(item);
        setSavedContent(updated);
      };

  const removeSavedContent = async (item) => {
            // find the savedId (_id in DB) for this item
            const saved = savedContent.find(
              i => i.itemId === item.itemId && i.type === item.type
            );
            if (!saved) return;
            const updated = await API.removeSaved(saved._id);
            setSavedContent(updated);
          };
        
  return (
    <AuthContext.Provider value={{ user, setUser, logout, savedContent,
      addSavedContent,
      removeSavedContent, }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
