import { Vehicle } from '../../types/vehicle';
import { Calendar, Gauge, Fuel, Car,  CarFront} from 'lucide-react';
import { Card } from '@nextui-org/react';

export function CarInfoPanel({ vehicle }: { vehicle: Vehicle }) {
	return (
		<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
			<div className=' text-gray-500'>Viatura adquirida:</div>
			<div className='pb-4'>
				<div className='text-2xl font-bold'>{vehicle.Brand}</div>
				<div className='text-lg -mt-1'>
					{vehicle.Model} {vehicle.Version}
				</div>
			</div>
			<img src={vehicle?.PhotoList[0].Photo} alt={vehicle?.Model} className='w-full h-55 object-cover rounded-2xl' />
			<div className='mt-4 color grid grid-cols-2 gap-4'>
				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Calendar />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Registo</div>
							<div className='text-white text-md'>
								{vehicle.Month} / {vehicle.Year}
							</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Gauge />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Quilómetros</div>
							<div className='text-white text-md'>{vehicle.Kms} Kms</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Fuel />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Combustível</div>
							<div className='text-white text-md'>{vehicle.Fuel}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<CarFront />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Segmento</div>
							<div className='text-white text-md'>{vehicle.Category}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Lugares</div>
							<div className='text-white text-md'>{vehicle.Seats}</div>
						</div>
					</div>
				</Card>

				<Card radius='md' className='bg-grey-boxCard px-3 py-2 text-white'>
					<div className='flex gap-2 items-center'>
						<Car />
						<div className='flex flex-col'>
							<div className='text-grey-title text-sm'>Portas</div>
							<div className='text-white text-md'>{vehicle.Doors}</div>
						</div>
					</div>
				</Card>
			</div>

			<div className='pt-10'>
				<div className='text-md pb-2 text-center'>Precisa de alguma assistência?</div>
				<div className='flex justify-center gap-4'>
					<a href='tel:+351910091775' className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full text-center'>
						Ligue já ao Comercial
					</a>

					<a href='whatsapp://send?abid=phonenumber&text=Olá!' className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full text-center'>
						Enviar mensagem
					</a>
				</div>
			</div>
		</div>
	);
}
