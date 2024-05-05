import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Paths from '../services/path.service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    fetch(`${Paths.API_BASE}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Authorization')}`
      }
    })
    .then(response => {
      if (response.status === 401) {
        localStorage.setItem('isLoggedIn', 'false');
        setAuth(false);
      } else {
        setAuth(isLoggedIn === 'true');
      }
    })
    .catch(error => {
      console.error('Error checking auth status:', error);
    });
  }, []);

  const value = { auth, setAuth };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};