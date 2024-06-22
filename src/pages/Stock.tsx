import { useState } from 'react';
import { Vehicle } from '../types/vehicle';
import { useVehicles } from '../contexts/VehiclesContext';
import { VehicleCard } from '../components/VehicleCard/VehicleCard';
import { ShowMoreBtn } from '../components/ShowMoreBtn';
import { CarSearchFilter } from '../components/VehicleSearchFilter';
import { Link } from 'react-router-dom';

export function Stock() {
	const { vehicles, loading, error } = useVehicles();
	const [visibleVehicles, setVisibleVehicles] = useState(8);
	const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

	const handleShowMore = () => {
		setVisibleVehicles(visibleVehicles + 8);
	};

	if (loading) return <div>Carregando...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className='global-container flex flex-col gap-10 '>
			<div className='flex flex-col items-center '>
				<h2 className='text-2xl font-bold mb-4'>O nosso stock</h2>
				<h3>Excelentes oportunidades para si.</h3>
			</div>

			<CarSearchFilter onSearch={setFilteredVehicles} />

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{filteredVehicles.length > 0
					? filteredVehicles.map(vehicle => (
							<Link key={vehicle.ID} to={`/Stock/${vehicle.ID}`}>
								<VehicleCard key={vehicle.ID} vehicle={vehicle} />
							</Link>
					  ))
					: vehicles.slice(0, visibleVehicles).map(vehicle => (
							<Link key={vehicle.ID} to={`/Stock/${vehicle.ID}`}>
								<VehicleCard key={vehicle.ID} vehicle={vehicle} />
							</Link>
					  ))}
			</div>

			{visibleVehicles < vehicles.length && <ShowMoreBtn onClick={handleShowMore} />}
		</div>
	);
}
