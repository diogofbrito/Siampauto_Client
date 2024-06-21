import { useParams } from 'react-router-dom';
import { useVehicles } from '../contexts/VehiclesContext';
import { WhereAreWe } from '../components/WhereAreWe';
import { Calendar, Gauge, Fuel, Car, PaintBucket, CarFront } from 'lucide-react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/react';

export function CarPage() {
	const { id } = useParams();
	const { vehicles, loading, error, formatEquipmentList } = useVehicles();

	if (loading) return <div>ACarregar...</div>;
	if (error) return <div>{error}</div>;

	const vehicle = vehicles.find(vehicle => vehicle.ID === Number(id));
	if (!vehicle) return <div>Projeto não encontrado</div>;

	return (
		<div className='p-24'>
			<div className='grid grid-cols-2 text-white  gap-10 '>
				<div className='w-full '>
					<img src={vehicle.PhotoList[0].Photo} alt={vehicle.Model} className=' rounded-2xl' />
				</div>
				<div>
					<h1 className='text-2xl font-bold mb-4'>
						{vehicle.Brand} {vehicle.Model}
					</h1>

					<div>
						{vehicle.Price.toLocaleString('pt-PT', {
							style: 'currency',
							currency: 'EUR',
						})}
					</div>
					<div>
						<div className=' text-gray-600 gap-8 '>
							<div className='grid grid-cols-4 gap-4'>
								<Card>
									<CardBody>
										<p className='text-gray-700'>Ano</p>
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
					</div>
					<div className='mt-8 bg-red-600 text-black '>
						<Accordion variant='splitted'>
							<AccordionItem key='1' aria-label='Accordion 1' title='Extras'>
								{vehicle.Obs}
							</AccordionItem>
							<AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
								<ul dangerouslySetInnerHTML={{ __html: formatEquipmentList(vehicle.EquipmentList) }}></ul>
							</AccordionItem>
							<AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'></AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
			<WhereAreWe />
		</div>
	);
}
