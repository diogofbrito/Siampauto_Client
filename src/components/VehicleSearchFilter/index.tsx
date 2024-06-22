import { useState, useEffect } from 'react';
import { useVehicles } from '../../contexts/VehiclesContext';
import { Vehicle } from '../../types/vehicle';
import { Select, SelectItem } from '@nextui-org/select';
import { Button } from '@nextui-org/react';

interface CarSearchFilterProps {
	onSearch: (filteredVehicles: Vehicle[]) => void;
}

export function CarSearchFilter({ onSearch }: CarSearchFilterProps) {
	const { vehicles } = useVehicles();

	const [brand, setBrand] = useState<string>('');
	const [model, setModel] = useState<string>('');
	const [availableModels, setAvailableModels] = useState<string[]>([]);

	useEffect(() => {
		if (brand) {
			const models = vehicles.filter(vehicle => vehicle.Brand === brand).map(vehicle => vehicle.Model);
			setAvailableModels([...new Set(models)]);
			setModel('');
		} else {
			setAvailableModels([]);
		}
	}, [brand, vehicles]);

	const handleSearch = () => {
		const filteredVehicles = vehicles.filter(vehicle => {
			const matchesBrand = brand ? vehicle.Brand === brand : true;
			const matchesModel = model ? vehicle.Model === model : true;

			return matchesBrand && matchesModel;
		});

		onSearch(filteredVehicles);
	};

	const uniqueBrands = [...new Set(vehicles.map(vehicle => vehicle.Brand))];
	console.log(availableModels);
	const totalVehicles = vehicles.filter(vehicle => (vehicle.Model === model)).filter(vehicle => (vehicle.Brand === brand));
	
	return (
		<div className='p-4 flex gap-4'>
			<Select value={brand} label='Selecione uma marca' onChange={e => setBrand(e.target.value)} placeholder='Selecione uma marca' className='max-w-xs'>
				{uniqueBrands.map(brand => (
					<SelectItem key={brand} value={brand} textValue={brand}>
						{brand}
					</SelectItem>
				))}
			</Select>

			<Select value={model} label='Selecione um modelo' onChange={e => setModel(e.target.value)} placeholder='Selecione um modelo' disabled={!brand} className='max-w-xs'>
				{availableModels.map(model => (
					<SelectItem key={model} value={model} textValue={model}>
						{model}
					</SelectItem>
				))}
			</Select>

			<Button onClick={handleSearch} className='lg'>
				Ver {totalVehicles.length === 0 ? vehicles.length : totalVehicles.length} veículos
			</Button>
		</div>
	);
}
