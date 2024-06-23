import { api } from './api';

export async function fetchAutomobilesNews() {
	try {
		const response = await api.get('/api/news/automobiles');
		return response.data;
	} catch (error) {
		console.error('Erro ao buscar notícias de automóveis:', error);
		return null;
	}
}
