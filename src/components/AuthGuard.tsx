import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function AuthGuard({ isPrivate = false }: { isPrivate?: boolean }) {
	const { isLogged } = useAuth();
	console.log(isLogged);

	if (!isLogged && isPrivate) {
		return <Navigate replace to='/Login' />;
	}
	if (isLogged && !isPrivate) {
		return <Navigate replace to='/Welcome' />;
	}
	return <Outlet />;
}
