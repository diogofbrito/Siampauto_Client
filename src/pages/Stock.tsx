import { useState, useEffect } from 'react';
import { Vehicle } from '../types/vehicle';
import { useVehicles } from '../contexts/VehiclesContext';
import { VehicleCard } from '../components/VehicleCard/VehicleCard';
import { ShowMoreBtn } from '../components/ShowMoreBtn';
import { CarSearchFilter } from '../components/VehicleSearchFilter/VehicleSearchFilter';
import { Link } from 'react-router-dom';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';
import { BrandsMarquee } from '../components/BrandsMarquee';

export function Stock() {
	const { vehicles, loading, error } = useVehicles();
	const [visibleVehicles, setVisibleVehicles] = useState(8);
	const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

	const handleShowMore = () => {
		setVisibleVehicles(prevVisibleVehicles => prevVisibleVehicles + 8);
	};

	useEffect(() => {
		setFilteredVehicles(vehicles.slice(0, visibleVehicles));
	}, [vehicles, visibleVehicles]);

	if (loading) return <div >A carregar...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className='global-container flex flex-col gap-10'>
			<div className='flex flex-col items-center'>
				<div className='text-4xl font-bold mb-4 text-white'>As nossas melhores ofertas.</div>
				<div className='text-2xl text-green-link'>Excelentes oportunidades para si.</div>
			</div>

			<BrandsMarquee />

			<CarSearchFilter onSearch={setFilteredVehicles} />

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{(filteredVehicles.length > 0 ? filteredVehicles.slice(0, visibleVehicles) : vehicles.slice(0, visibleVehicles)).map(vehicle => (
					<Link key={vehicle.ID} to={`/Stock/${vehicle.ID}`}>
						<VehicleCard key={vehicle.ID} vehicle={vehicle} />
					</Link>
				))}
			</div>

			{visibleVehicles < vehicles.length && <ShowMoreBtn onClick={handleShowMore} />}

			<WhereAreWe />
		</div>
	);
}
