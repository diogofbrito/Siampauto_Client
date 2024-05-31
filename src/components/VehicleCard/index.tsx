import { Vehicle } from '../../services/standvirtualXML';

interface VehicleCardProps {
	vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
	console.log('vehicle11', vehicle);
	return (
		<div className='vehicle-card'>
			<img src={vehicle.PhotoList[0]} alt={`${vehicle.Brand} ${vehicle.Model}`} />
			<h2>
				{vehicle.Brand} {vehicle.Model}
			</h2>
			<p>Version: {vehicle.Version}</p>
			<p>Year: {vehicle.Year}</p>
			<p>Price: {vehicle.Price}€</p>
			<p>Kms: {vehicle.Kms}</p>
		</div>
	);
}
