import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function AuthGuard({ isPrivate = false }: { isPrivate?: boolean }) {
	const { isLogged, loading } = useAuth();

	if (loading) {
		return <>A carregar...</>;

	}

	if (!isLogged && isPrivate) {
		return <Navigate replace to='/Entrar' />;
	}

	return <Outlet />;
}
