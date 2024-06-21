import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle } from '../types/vehicle';
import { fetchVehicles } from '../services/fetchAllCars';

interface VehiclesContextProps {
	vehicles: Vehicle[];
	loading: boolean;
	error: string | null;
	formatEquipmentList: (equipmentList: string[]) => string;
}

const VehiclesContext = createContext<VehiclesContextProps | undefined>(undefined);

const VehiclesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getVehicles = async () => {
			try {
				const data = await fetchVehicles();
				setVehicles(data);
				setLoading(false);
			} catch (err) {
				setError('Erro ao buscar veículos.');
				setLoading(false);
			}
		};

		getVehicles();
	}, []);

	const formatEquipmentList = (equipmentList: string[]): string => {
		return `<ul>${equipmentList.map(item => `<li>${item}</li>`).join('')}</ul>`;
	};

	return <VehiclesContext.Provider value={{ vehicles, loading, error, formatEquipmentList }}>{children}</VehiclesContext.Provider>;
};

const useVehicles = (): VehiclesContextProps => {
	const context = useContext(VehiclesContext);
	if (!context) {
		throw new Error('useVehicles deve ser usado dentro de um VehiclesProvider');
	}
	return context;
};

export { VehiclesProvider, useVehicles };
