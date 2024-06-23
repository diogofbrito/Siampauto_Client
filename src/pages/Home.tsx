import { Link } from 'react-router-dom';
import { BrandsMarquee } from '../components/BrandsMarquee';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';
import heroPhoto from '/imgs/BgHero_Mercedes.jpg';

export function Home() {
	return (
		<div>
			<div className='h-screen w-screen' style={{ backgroundImage: `url(${heroPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
			<div className='global-container'>
				<Link to='/Stock'>
					<div className='text-4xl font-bold mb-4 text-white text-center'>As nossas marcas</div>
					<BrandsMarquee />
				</Link>

				<WhereAreWe />
			</div>
		</div>
	);
}
