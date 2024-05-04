import { useAuth } from '../providers/authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
