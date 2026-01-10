import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

const ProtectedRoute = () => {
  const { isUserLoggedIn } = useAppSelector(state => state.login);

  const isAuthenticated = isUserLoggedIn;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;