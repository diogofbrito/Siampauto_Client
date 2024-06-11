import { Vehicle } from '../types/vehicle';

export function getFilteredVehicles(vehicles: Vehicle[], brandFilter?: string, modelFilter?: string, fuelFilter?: string): Vehicle[] {
	return vehicles.filter(vehicle => {
		const brandMatch = !brandFilter || vehicle.Brand === brandFilter;
		const modelMatch = !modelFilter || vehicle.Model === modelFilter;
		const fuelMatch = !fuelFilter || vehicle.Fuel === fuelFilter;
		return brandMatch && modelMatch && fuelMatch;
	});
}
