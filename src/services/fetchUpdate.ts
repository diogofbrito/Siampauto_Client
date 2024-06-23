import { api } from './api';

export interface UpdateData {
	dateBirth?: Date;
	address?: string;
	city?: string;
	phoneNumber?: string;
}

interface User {
	id: number;
	fullName: string;
	nif: string;
	dateBirth: Date;
	address: string;
	city: string;
	phoneNumber: string;
	email: string;
	password: string;
	cars: string[];
	validationCode: string;
	createdAt: Date;
}
export async function fetchUpdate(data: UpdateData) {
	const response = await api.patch<User>('/update', data);
	return response.data;
}
