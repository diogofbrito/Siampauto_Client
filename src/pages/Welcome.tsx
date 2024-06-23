import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { InspectionSimulator } from '../components/InspectionSimulator';
import { CarInfoPanel } from '../components/Dashboard/VehicleInfoPanel';
import { LiveClock } from '../components/Dashboard/LiveClock';
import { News } from '../components/News';

export function Welcome() {
	const { user, vehicle } = useAuth();
	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

	useEffect(() => {
		if (user) {
			const script = document.createElement('script');
			script.src = 'https://embed.tawk.to/66777a7c9d7f358570d268d0/1i11bcto2';
			script.async = true;
			script.charset = 'UTF-8';
			script.setAttribute('crossorigin', '*');
			document.body.appendChild(script);

			return () => {
				document.body.removeChild(script);
			};
		}
	}, [user]);

	return (
		<div className='flex flex-col text-white p-24 gap-6'>
			<div className='font-bold text-3xl md:flex md:justify-between block'>
				<div>
					Bem vindo <span className='text-green-link'>{formattedName}</span>
				</div>
				<LiveClock />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
				{vehicle && <CarInfoPanel vehicle={vehicle} />}
				<div className=' flex flex-col gap-6'>
					<InspectionSimulator />
					<div className='bg-grey-default rounded-3xl p-6 '>
					</div>
				</div>
					<News />
			</div>
		</div>
	);
}
