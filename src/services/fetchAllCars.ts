import { Vehicle } from '../types/vehicle';
import { api } from './api';

export async function fetchVehicles() {
	const response = await api.get<Vehicle[]>('/cars');
	return response.data;
}
