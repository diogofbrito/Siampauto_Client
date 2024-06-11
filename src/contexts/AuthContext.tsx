import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
	isLogged: boolean;
	logout: () => void;
	loggin: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const loggin = (token: string) => {
		setIsLogged(true);
		localStorage.setItem('token', token);
	};

	const logout = () => {
		setIsLogged(false);
		localStorage.removeItem('token');
	};

	return <AuthContext.Provider value={{ isLogged, loggin, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
};

export { AuthProvider, useAuth };
