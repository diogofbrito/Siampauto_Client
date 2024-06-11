import React from 'react';
import { Vehicle } from '../types/vehicle';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
	vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
	return (
		<div className='rounded-3xl border overflow-hidden transform transition duration-300 hover:scale-105 p-6'>
			<Link to={`/vehicle/${vehicle.ID}`}>
				<img src={vehicle.PhotoList[0].Photo} alt={vehicle.Model} className='w-full h-55 object-cover rounded-2xl' loading='lazy' />
			</Link>
			<div className='mt-4 color'>
				<h3 className='text-lg font-semibold mb-2'>
					{vehicle.Brand} {vehicle.Model}
				</h3>
				<p className='text-gray-600'>
					{vehicle.Year} - {vehicle.Fuel}
				</p>
				<p className='text-xl font-bold mt-2'>
					{vehicle.Price.toLocaleString('pt-PT', {
						style: 'currency',
						currency: 'EUR',
					})}
				</p>
				<div className='flex mt-2'>
					<div className='mr-4'>
						<span className='text-gray-500'>Registadededo:</span> {vehicle.Year}
					</div>
					<div>
						<span className='text-gray-500'>Quilómetros:</span> {vehicle.Kms}
					</div>
				</div>
			</div>
		</div>
	);
}
