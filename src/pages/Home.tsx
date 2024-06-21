import { Hero } from '../components/Hero';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';

export function Home() {
	return (
		<div>
			<Hero imageUrl='../../../public/imgs/BgHero_Mercedes.jpg' />
			<div className='global-container'>
				<WhereAreWe />
			</div>
		</div>
	);
}
