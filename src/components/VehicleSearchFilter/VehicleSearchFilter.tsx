import  { useState, useEffect } from 'react';
import { useVehicles } from '../../contexts/VehiclesContext';
import { Vehicle } from '../../types/vehicle';
import { Select, SelectItem } from '@nextui-org/select';

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

	useEffect(() => {
		const filteredVehicles = vehicles.filter(vehicle => {
			const matchesBrand = !brand || brand === 'Ver Todos' ? true : vehicle.Brand === brand;
			const matchesModel = !model || vehicle.Model === model;
			return matchesBrand && matchesModel;
		});

		onSearch(filteredVehicles.length > 0 ? filteredVehicles : vehicles);
	}, [brand, model, vehicles, onSearch]);


	const uniqueBrandsSet = new Set(vehicles.map(vehicle => vehicle.Brand));
	const uniqueBrands = ['Ver Todos', ...uniqueBrandsSet];

	return (
		<div className='p-4 flex gap-4 items-center justify-center'>
			<Select
				value={brand}
				label='Selecione uma marca'
				onChange={e => {
					const selectedBrand = e.target.value;
					setBrand(selectedBrand === 'Ver Todos' ? '' : selectedBrand);
					if (selectedBrand === 'Ver Todos') {
						setModel('');
					}
				}}
				placeholder='Selecione uma marca'
				className='max-w-xs'
			>
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
		</div>
	);
}
