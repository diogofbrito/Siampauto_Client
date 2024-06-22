import axios from 'axios';

const { VITE_API_BASE_URL } = import.meta.env;

export const api = axios.create({
	baseURL: VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(async config => {
	config.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
	return config;
});

api.interceptors.request.use(async config => {
	const storageToken = localStorage.getItem('token');
	if (storageToken) {
		config.headers.set('Authorization', `Bearer ${storageToken}`);
	}
	return config;
});
