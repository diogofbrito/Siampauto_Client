import { api } from './api';

interface LoginData {
	email: string;
	password: string;
}
export async function fetchLogin(data: LoginData) {
	const response = await api.post<{ token: string }>('/login', data);
	return response.data;
}
