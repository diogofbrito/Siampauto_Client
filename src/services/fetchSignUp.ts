import { api } from './api';

interface SignUpData {
	fullName: string;
	nif: string;
	email: string;
	password: string;
	validationCode: string;
}
export async function fetchSignUp( data: SignUpData) {
	const response = await api.post<{ token: string }>('/signup', data);
	return response.data;
}
