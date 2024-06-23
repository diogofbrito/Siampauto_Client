import { api } from './api';

export async function fetchWeather() {
	try {
		const response = await api.get('/api/weather');
		return response.data;
	} catch (error) {
		console.error('Erro get weather data:', error);
		return null;
	}
}
