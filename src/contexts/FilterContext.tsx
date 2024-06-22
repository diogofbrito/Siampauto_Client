import { createContext, useContext, useState, ReactNode } from 'react';
import { Vehicle } from '../types/vehicle';
import { getFilteredVehicles } from '../utils/vehicleUtils';

interface FilterContextProps {
	filters: {
		brand?: string;
		model?: string;
	};
	setFilters: (filters: FilterContextProps['filters']) => void;
	filteredVehicles: Vehicle[];
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export function FilterProvider({ children, vehicles }: { children: ReactNode; vehicles: Vehicle[] }) {
	const [filters, setFilters] = useState<{
		brand?: string;
		model?: string;
	}>({});

	const filteredVehicles = getFilteredVehicles(vehicles, filters.brand, filters.model);

	return <FilterContext.Provider value={{ filters, setFilters, filteredVehicles }}>{children}</FilterContext.Provider>;
}

export const useFilters = () => {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error('useFilters must be used within a FilterProvider');
	}
	return context;
};
