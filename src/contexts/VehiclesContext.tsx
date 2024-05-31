import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchVehicles, Vehicle } from '../services/standvirtualXML';
import { useFilters } from './SearchFilterContext';
import { FiltersState } from './types';

interface VehiclesContextProps {
	vehicles: Vehicle[];
	filteredVehicles: Vehicle[];
	loading: boolean;
	error: Error | null;
	setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
}

const VehiclesContext = createContext<VehiclesContextProps | undefined>(undefined);

export function VehiclesProvider({ children }: { children: React.ReactNode }) {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const { state: filters } = useFilters();

	useEffect(() => {
		async function fetchVehicleData() {
			try {
				const vehicles = await fetchVehicles();
				setVehicles(vehicles);
				setError(null);
			} catch (error) {
				setError(error as Error);
				setVehicles([]);
			} finally {
				setLoading(false);
			}
		}

		fetchVehicleData();
	}, []);

	useEffect(() => {
		const applyFilters = (vehicles: Vehicle[], filters: FiltersState) => {
			return vehicles.filter(vehicle => {
				return (
					(!filters.brand || vehicle.Brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
					(!filters.model || vehicle.Model.toLowerCase().includes(filters.model.toLowerCase())) &&
					(filters.kms === null || vehicle.Kms <= filters.kms) &&
					(filters.price === null || vehicle.Price <= filters.price) &&
					(!filters.fuel || vehicle.Fuel.toLowerCase() === filters.fuel.toLowerCase()) &&
					(filters.year === null || vehicle.Year === filters.year) &&
					(!filters.transmission || vehicle.Transmission.toLowerCase() === filters.transmission.toLowerCase()) &&
					(filters.doors === null || vehicle.Doors === filters.doors) &&
					(!filters.color || vehicle.Color.toLowerCase() === filters.color.toLowerCase())
				);
			});
		};

		setFilteredVehicles(applyFilters(vehicles, filters));
	}, [filters, vehicles]);

	return <VehiclesContext.Provider value={{ vehicles, filteredVehicles, loading, error, setVehicles, setError }}>{children}</VehiclesContext.Provider>;
}

export const useVehicles = (): VehiclesContextProps => {
	const context = useContext(VehiclesContext);
	if (context === undefined) {
		throw new Error('useVehicles must be used within a VehiclesProvider');
	}
	return context;
};