import React, { useContext, useState, useEffect } from 'react';
import { useFilters } from '../../contexts/SearchFilterContext';
import { useVehicles } from '../../contexts/VehiclesContext';
import './style.css';

export function CarSearchFilter() {
	const { state, dispatch } = useFilters();
	const { vehicles, filteredVehicles, loading } = useVehicles();

	const getUniqueValues = (vehicles: any[], key: string) => {
		const uniqueValues = vehicles.map(vehicle => vehicle[key]);
		return [...new Set(uniqueValues)];
	};

	const uniqueBrands = getUniqueValues(vehicles, 'Brand');
	const uniqueModels = getUniqueValues(vehicles, 'Model');
	const uniqueFuels = getUniqueValues(vehicles, 'Fuel');

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;
		dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
	};

	return (
		<div className='rounded-xl p-8 glass-effect'>
			<h2 className='text-2xl text-white font-bold mb-4'>Que Viatura Procura?</h2>

			<div className='grid grid-cols-4 gap-6'>
				<div>
					<select name='brand' value={state.brand} onChange={handleChange} className='bg-gray-500 text-white rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'>
						<option value=''>Marca</option>
						{uniqueBrands.map(brand => (
							<option key={brand} value={brand}>
								{brand}
							</option>
						))}
					</select>
				</div>

				<div>
					<select name='model' value={state.model} onChange={handleChange} className='bg-gray-500 text-white rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'>
						<option value=''>Modelo</option>
						{uniqueModels.map(model => (
							<option key={model} value={model}>
								{model}
							</option>
						))}
					</select>
				</div>

				<div>
					<select name='fuel' value={state.fuel} onChange={handleChange} className='bg-gray-500 text-white rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'>
						<option value=''>Combustível</option>
						{uniqueFuels.map(fuel => (
							<option key={fuel} value={fuel}>
								{fuel}
							</option>
						))}
					</select>
				</div>

				<button className='bg-gray-500 text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'>Ver {loading ? '...' : filteredVehicles.length} viaturas</button>
			</div>
		</div>
	);
}
