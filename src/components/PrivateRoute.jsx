
import {useAuth} from './AuthContext';
import {Navigate, useLocation} from 'react-router-dom';

function PrivateRoute({children}){

    const { user } = useAuth();
    const location = useLocation();

     if (!user) {
    // redirect to login *with* the attempted path
    return <Navigate to="/LoginForm" state={{ from: location }} replace />;
  }

  return children;
     
}

export default PrivateRoute;