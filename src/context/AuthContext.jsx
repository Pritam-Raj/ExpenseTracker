import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userID'));
  const navigate = useNavigate();

  const login = (userID) => {
    localStorage.setItem('userID', userID);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userID');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
