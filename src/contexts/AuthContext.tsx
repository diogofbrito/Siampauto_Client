import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { Vehicle } from '../types/vehicle';
import { UserData } from '../types/user';
import { toast } from 'sonner';


interface AuthContextProps {
	isLogged: boolean;
	logout: () => void;
	loggin: (token: string) => void;
	user: UserData['user'] | null;
	vehicle: Vehicle | null;
	loading: boolean;
	updateProfile: (data: Partial<UpdateData>) => Promise<void>;
}


interface UpdateData {
	dateBirth?: Date | null;
	address?: string | null;
	city?: string | null;
	phoneNumber?: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<UserData['user'] | null>(null);
	const [vehicle, setVehicle] = useState<Vehicle | null>(null);

	function loggin(token: string) {
		setIsLogged(true);
		localStorage.setItem('token', token);
	}

	function logout() {
		setIsLogged(false);
		localStorage.removeItem('token');
		setVehicle(null);
	}

	async function updateProfile(data: Partial<UpdateData>) {
		try {
			const token = localStorage.getItem('token');
			if (!token) {
				throw new Error('Token não encontrado');
			}
			const response = await api.patch<UserData>('/update', data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setUser(response.data.user);
			toast.success('Perfil atualizado com sucesso!');
		} catch (error) {
			console.error('Erro ao atualizar perfil:', error);
			throw error;
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			api.defaults.headers.Authorization = `Bearer ${token}`;
			setIsLogged(true);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		async function loadStorageData() {
			const token = localStorage.getItem('token');

			if (!token) {
				logout();
				return;
			}

			try {
				const { data } = await api.get<UserData>('/profile', {
					headers: { Authorization: `Bearer ${token}` },
				});
				setUser(data.user);
				setVehicle(data.car);
				setIsLogged(true);
			} catch (err) {
				logout();
				console.log(err);
			}
		}

		loadStorageData();
	}, [isLogged]);

	return <AuthContext.Provider value={{ loading, vehicle, user, isLogged, loggin, logout, updateProfile }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
};

export { AuthProvider, useAuth };
