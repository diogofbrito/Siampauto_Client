import { useAuth } from '../contexts/AuthContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { InspectionSimulator } from '../components/IPO/InspectionSimulator';
import { CarInfoPanel } from '../components/Dashboard/VehicleInfoPanel';
import { LiveClock } from '../components/Dashboard/LiveClock';

export function Welcome() {
	const { user, car } = useAuth();
	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

/* 	const date = new Intl.DateTimeFormat('pt-BR').format(new Date(user?.createdAt || new Date()));
 */
	return (
		<div className='flex flex-col text-white p-24 gap-4'>
			<div className='font-bold text-3xl flex justify-between'>
				Bem vindo {formattedName}
				<LiveClock />
			</div>
			<div className='grid grid-cols-3 gap-6 '>
				{car && <CarInfoPanel car={car} />}
				<InspectionSimulator />

				<div className='rounded-xl'>olaaa</div>
			</div>
		</div>
	);
}
