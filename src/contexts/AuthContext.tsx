import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { Vehicle } from '../types/vehicle';

interface AuthContextProps {
	isLogged: boolean;
	logout: () => void;
	loggin: (token: string) => void;
	user: ProfileData['user'] | null;
	car: Vehicle | null;
}

interface ProfileData {
	user: {
		id: number;
		fullName: string;
		nif: string;
		email: string;
		password: string;
		cars: string[];
		validationCode: string;
		createdAt: Date;
	};
	car: Vehicle;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState<ProfileData['user'] | null>(null);
	const [car, setCar] = useState<Vehicle | null>(null);

	function loggin(token: string) {
		setIsLogged(true);
		localStorage.setItem('token', token);
	}

	function logout() {
		setIsLogged(false);
		localStorage.removeItem('token');
		setCar(null);
	}

	useEffect(() => {
		async function loadStorageData() {
			const token = localStorage.getItem('token');

			if (!token) {
				logout();
				return;
			}

			try {
				const { data } = await api.get<ProfileData>('/profile', { headers: { Authorization: `Bearer ${token}` } });
				setUser(data.user);
				setCar(data.car);
				setIsLogged(true);

				console.log(data.car);
			} catch (err) {
				logout();
				console.log(err);
			}
		}

		loadStorageData();
	}, []);

	return <AuthContext.Provider value={{ car, user, isLogged, loggin, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
};

export { AuthProvider, useAuth };
