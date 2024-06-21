import { Vehicle } from '../../types/vehicle'

import { Calendar, Gauge, Fuel, Car, PaintBucket, CarFront } from 'lucide-react';

export function CarInfoPanel({ car }: { car: Vehicle }) {
	return (
		<div className='rounded-3xl border overflow-hidden p-6'>
			<div className='mb-4 text-gray-500'>Viatura adquirida:</div>
			<img src={car?.PhotoList[0].Photo} alt={car?.Model} className='w-full h-55 object-cover rounded-2xl' />
			<div className='mt-4 color'>
				<h3 className='text-2xl font-semibold mb-6 leading-5'>
					{car?.Brand} {car?.Model}
					<span className='text-xl'>{car?.Version ? ` ${car?.Version}` : ''}</span>
				</h3>
				<div className='px-8 grid grid-cols-2 text-gray-600 gap-3 '>
					<div className='flex flex-col'>
						<p className='text-gray-700'>Ano</p>
						<div className='flex gap-2 text-lg'>
							<Calendar />
							{car?.Month} / {car?.Year}
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='text-gray-700 '>Quilómetros</p>
						<div className='flex gap-2 text-lg'>
							<Gauge />
							{car?.Kms} Km
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='text-gray-700'>Segmento</p>
						<div className='flex gap-2 text-lg'>
							<Car />
							{car?.Category}
						</div>
					</div>

					<div className='flex flex-col'>
						<p className='text-gray-700 '>Combustível</p>
						<div className='flex gap-2 text-lg'>
							<Fuel />
							{car?.Fuel}
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='text-gray-700 '>Cor</p>
						<div className='flex gap-2 text-lg'>
							<PaintBucket />
							{car?.Color}
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='text-gray-700 '>Transmissão</p>
						<div className='flex gap-2 text-lg'>
							<CarFront />
							{car?.Transmission}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
