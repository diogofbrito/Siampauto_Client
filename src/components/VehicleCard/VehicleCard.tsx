import { Vehicle } from '../../types/vehicle';
import { Calendar, Fuel, Gauge, Car } from 'lucide-react';
import { Card } from '@nextui-org/react';

interface VehicleCardProps {
	vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
	return (
		<div className='rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 p-6 bg-grey-default'>
			<img src={vehicle.PhotoList[0].Photo} alt={vehicle.Model} className='w-full h-[240px] object-cover rounded-2xl' loading='lazy' />

			<div className='mt-4 text-white flex justify-between'>
				<div>
					<div className='text-xl font-bold'>{vehicle.Brand}</div>
					<div className='text-lg -mt-1'>{vehicle.Model}</div>
				</div>
				<p className='text-2xl font-bold text-green-link'>{vehicle.Price} €</p>
			</div>
			<div className='mt-4 color grid grid-cols-2 gap-4'>
				<Card radius='sm' className='bg-grey-boxCard px-2 py-1 text-white'>
					<div className='flex gap-2 items-center'>
						<Calendar />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Ano</div>
							<div className='text-white'>{vehicle.Year}</div>
						</div>
					</div>
				</Card>

				<Card radius='sm' className='bg-grey-boxCard px-2 py-1 text-white'>
					<div className='flex gap-2 items-center'>
						<Fuel />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Combustível</div>
							<div className='text-white'>{vehicle.Fuel}</div>
						</div>
					</div>
				</Card>

				<Card radius='sm' className='bg-grey-boxCard px-2 py-1 text-white'>
					<div className='flex gap-2 items-center'>
						<Gauge />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Quilómetros</div>
							<div className='text-white'>{vehicle.Kms} Kms</div>
						</div>
					</div>
				</Card>

				<Card radius='sm' className='bg-grey-boxCard px-2 py-1 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Lugares</div>
							<div className='text-white'>{vehicle.Seats}</div>
						</div>
					</div>
				</Card>

			</div>
		</div>
	);
}
