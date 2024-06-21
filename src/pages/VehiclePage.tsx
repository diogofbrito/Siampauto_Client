import { useParams } from 'react-router-dom';
import { useVehicles } from '../contexts/VehiclesContext.tsx';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe.tsx';
import { PageSpecifics } from '../components/VehiclePage/PageSpecifics.tsx';
import { PageAccordion } from '../components/VehiclePage/PageAccordion.tsx';

export function VehiclePage() {
	const { id } = useParams();
	const { vehicles, loading, error, formatEquipmentList } = useVehicles();

	if (loading) return <div>ACarregar...</div>;
	if (error) return <div>{error}</div>;

	const vehicle = vehicles.find(vehicle => vehicle.ID === Number(id));
	if (!vehicle) return <div>Projeto não encontrado</div>;

	return (
		<div className='global-container'>
			<div className='grid grid-cols-2 text-white gap-10'>
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

					<PageSpecifics vehicle={vehicle} />

					<PageAccordion vehicle={vehicle} formatEquipmentList={formatEquipmentList} />
				</div>
			</div>
			<WhereAreWe />
		</div>
	);
}
