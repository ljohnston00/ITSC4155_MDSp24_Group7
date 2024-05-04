import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/authprovider';

const withAuth = (Component) => {
  return () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth) {
        navigate('/login');
        return null;
      }

    return <Component />;
  };
};

export default withAuth;
