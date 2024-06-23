import { Vehicle } from '../../types/vehicle';
import { Calendar, Gauge, Fuel, Car, PaintBucket, CarFront, CircleGauge, Award, Leaf } from 'lucide-react';
import { Card } from '@nextui-org/react';

interface CarSpecificsProps {
	vehicle: Vehicle;
}

export function PageSpecifics({ vehicle }: CarSpecificsProps) {
	return (
		<div className=' text-gray-600 gap-8 '>
			<div className='grid  grid-cols-2 md:grid-cols-4 gap-4'>
				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Calendar />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Registo</div>
							<div className='text-white text-md md:text-lg'>
								{vehicle.Month} / {vehicle.Year}
							</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Gauge />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Quilómetros</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Kms} Kms</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Fuel />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Combustível</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Fuel}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<CarFront />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Segmento</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Category}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Lugares</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Seats}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Portas</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Doors}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Cilindrada</div>
							<div className='text-white text-md md:text-lg'>{vehicle.CC} cc</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<CircleGauge />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Potência</div>
							<div className='text-white text-md md:text-lg'>{vehicle.HP} cv</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<PaintBucket />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Cor</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Color}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<CarFront />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Transmissão</div>
							<div className='text-white text-md md:text-lg'>{vehicle.Transmission}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Award />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>Garantia</div>
							<div className='text-white text-md md:text-lg'>{vehicle.WarrantyMonths} meses *</div>
						</div>
					</div>
				</Card>
				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Leaf />
						<div className='flex flex-col'>
							<div className='text-grey-title text-xs md:text-sm'>CO2</div>
							<div className='text-white text-md md:text-lg'>{vehicle.co2} g/km</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
