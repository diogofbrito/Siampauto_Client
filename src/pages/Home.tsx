import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';
import heroPhoto from '../../public/imgs/BgHero_Mercedes.jpg';

export function Home() {
	return (
		<div>
			<div className='h-screen w-screen' style={{ backgroundImage: `url(${heroPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
			<div className='global-container'>
				<WhereAreWe />
			</div>
		</div>
	);
}
