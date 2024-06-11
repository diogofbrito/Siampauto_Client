import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';

export function Home() {
	return (
		<div className=' '>
			<Hero imageUrl='../../../public/imgs/BgHero_Mercedes.jpg' />
			<Highlights />
		</div>
	);
}
