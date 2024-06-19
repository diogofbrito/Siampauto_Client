import { api } from './api';

export async function fetchDelete() {
	const response = await api.delete('/delete');
	return response.data;
}
