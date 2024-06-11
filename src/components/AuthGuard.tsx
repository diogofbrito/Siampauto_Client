import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function AuthGuard() {
    const { isLogged } = useAuth();
    
    if (!isLogged) {
        return <Navigate to="/Login" />
    }
    return <Outlet />
}
