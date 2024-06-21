import { Vehicle } from '../../types/vehicle';
import { Calendar, Fuel } from 'lucide-react';
import { Card } from '@nextui-org/react';

interface VehicleCardProps {
	vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
	return (
		<div className='rounded-3xl border overflow-hidden transform transition duration-300 hover:scale-105 p-6'>
			<img src={vehicle.PhotoList[0].Photo} alt={vehicle.Model} className='w-full h-55 object-cover rounded-2xl' loading='lazy' />

			<h1 className='text-2xl font-bold mt-4'>
				{vehicle.Brand} {vehicle.Model}
			</h1>
			<div className='mt-4 color grid grid-cols-3 gap-4'>
				<Card radius='md' className='p-2 bg-transparent border-1 border-green-500 '>
					<p className='text-gray-700 text-sm'>Ano</p>
					<div className='flex gap-1 font-bold text-sm items-center '>
						<Calendar />
						{vehicle.Year}
					</div>
				</Card>

				<Card radius='md' className='p-2 bg-gray-800'>
					<p className='text-gray-700 text-sm'>Combustível</p>
					<div className='flex gap-1 items-center font-bold text-sm'>
						<Fuel />
						{vehicle.Fuel}
					</div>
				</Card>

				<Card radius='md' className='p-2'>
					<p className='text-gray-700 text-sm'>Quilómetros</p>
					<div className='flex gap-1 text-sm font-bold items-center'>
						<Fuel />
						{vehicle.Kms}
					</div>
				</Card>

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
