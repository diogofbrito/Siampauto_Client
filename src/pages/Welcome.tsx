import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { InspectionSimulatorInfoPanel } from '../components/Dashboard/InspectionSimulatorInfoPanel';
import { CarInfoPanel } from '../components/Dashboard/VehicleInfoPanel';
import { LiveClockInfoPanel } from '../components/Dashboard/LiveClockInfoPanel';
import { NewsInfoPanel } from '../components/Dashboard/NewsInfoPanel';
import { NotesComponent } from '../components/UserNotes/NotesComponent';
import { UserInfoPanel } from '../components/Dashboard/UserInfoPanel';
import { WeatherInfoPanel } from '../components/Dashboard/WeatherInfoPanel';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';

export function Welcome() {
	const { user, vehicle, isLogged } = useAuth();
	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

	useEffect(() => {
		if (user && isLogged) {
			const script = document.createElement('script');
			script.src = 'https://embed.tawk.to/66777a7c9d7f358570d268d0/1i11bcto2';
			script.async = true;
			script.charset = 'UTF-8';
			script.setAttribute('crossorigin', '*');
			document.body.appendChild(script);

			return () => {
				document.body.removeChild(script);
			};
		} else {
			const script = document.querySelector('script[src="https://embed.tawk.to/66777a7c9d7f358570d268d0/1i11bcto2"]');
			if (script) {
				document.body.removeChild(script);
			}
		}
	}, [user, isLogged]); 

	return (
		<div className='global-container'>
			<div className='flex flex-col text-white gap-6'>
				<div className='font-bold text-3xl md:flex md:justify-between block'>
					<div>
						Bem vindo <span className='text-green-link'>{formattedName}</span>
					</div>
					<LiveClockInfoPanel />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
					{vehicle && <CarInfoPanel vehicle={vehicle} />}
					<div className=' flex flex-col gap-6'>
						<InspectionSimulatorInfoPanel />
						{user && <UserInfoPanel user={user} />}
						<WeatherInfoPanel />
					</div>
					<NewsInfoPanel />
				</div>
				<div className='bg-grey-default rounded-3xl p-6 '>
					<NotesComponent />
				</div>
			</div>
			<WhereAreWe />
		</div>
	);
}
