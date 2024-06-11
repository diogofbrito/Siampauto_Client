import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3002',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(async config => {
	config.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
	return config;
});