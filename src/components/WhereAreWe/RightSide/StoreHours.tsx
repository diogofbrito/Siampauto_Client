import { useStoreHours } from '../../../hooks/useStoreHours';
import { TriangleAlert, Store, DoorClosed } from 'lucide-react';

export function StoreHours() {
	const status = useStoreHours();

	const getStatusColor = () => {
		switch (status) {
			case 'Fechado':
				return 'red';
			case 'Abre em breve':
			case 'Fecha em breve':
				return 'orange';
			case 'Aberto':
				return 'green';
			default:
				return 'black';
		}
	};

	const getStatusIcon = () => {
		switch (status) {
			case 'Fechado':
				return <Store color='red' />;
			case 'Abre em breve':
			case 'Fecha em breve':
				return <TriangleAlert color='orange' />;
			case 'Aberto':
				return <DoorClosed color='green' />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className='flex gap-1' style={{ color: getStatusColor() }}>
				{getStatusIcon()} {status}
			</div>
			<div className='pt-1'>
				Segunda a Sexta: 10h - 13h, 14:30h - 18h<br></br>
				Fins de semana e feriados: Fechado
			</div>
		</div>
	);
}
