import { Vehicle } from '../../types/vehicle';
import { Calendar, Gauge, Fuel, Car, PaintBucket, CarFront } from 'lucide-react';
import { Card, CardBody } from '@nextui-org/react';

interface CarSpecificsProps {
	vehicle: Vehicle;
}

export function PageSpecifics({ vehicle }: CarSpecificsProps) {
	return (
		<div className=' text-gray-600 gap-8 '>
			<div className='grid grid-cols-4 gap-4'>
				<Card>
					<CardBody>
						<p className='text-gray-700'>Registo</p>
						<div className='flex gap-2 text-lg'>
							<Calendar />
							{vehicle.Month} / {vehicle.Year}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Quilómetros</p>
						<div className='flex gap-2 text-lg'>
							<Gauge />
							{vehicle.Kms} Km
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700'>Segmento</p>
						<div className='flex gap-2 text-lg'>
							<Car />
							{vehicle.Category}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Lugares</p>
						<div className='flex gap-2 text-lg'>
							<Car />
							{vehicle.Seats}
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<p className='text-gray-700 '>Portas</p>
						<div className='flex gap-2 text-lg'>
							<Car />
							{vehicle.Doors}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Combustível</p>
						<div className='flex gap-2 text-lg'>
							<Fuel />
							{vehicle.Fuel}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Cilindrada</p>
						<div className='flex gap-2 text-lg'>
							<Fuel />
							{vehicle.CC}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Potência</p>
						<div className='flex gap-2 text-lg'>
							<Fuel />
							{vehicle.HP} cv
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Cor</p>
						<div className='flex gap-2 text-lg'>
							<PaintBucket />
							{vehicle.Color}
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<p className='text-gray-700 '>Transmissão</p>
						<div className='flex gap-2 text-lg'>
							<CarFront />
							{vehicle.Transmission}
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
