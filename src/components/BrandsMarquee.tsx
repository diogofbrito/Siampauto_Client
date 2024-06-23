import Marquee from 'react-fast-marquee';

export function BrandsMarquee() {
	const brands = [
		{ name: 'Mercedes-Benz', url: '/imgs/marqueeLogos/MercedesBenz.webp' },
		{ name: 'Audi', url: '/imgs/marqueeLogos/Audi.webp' },
		{ name: 'BMW', url: '/imgs/marqueeLogos/BMW.webp' },
		{ name: 'Bentley', url: '/imgs/marqueeLogos/Bentley.webp' },
		{ name: 'Land Rover', url: '/imgs/marqueeLogos/LandRover.webp' },
		{ name: 'Smart', url: '/imgs/marqueeLogos/Smart.webp' },
		{ name: 'Renault', url: '/imgs/marqueeLogos/Renault.webp' },
		{ name: 'Volkswagen', url: '/imgs/marqueeLogos/Volkswagen.webp' },
	];

	return (
		<div className='flex flex-col items-center'>

			<div className='text-white'>
				<Marquee>
					{brands.map(brand => (
						<div key={brand.name}>
							<div className='flex flex-row gap-4 bg-grey-default p-4 m-4 rounded-2xl'>
								<img src={brand.url} alt={brand.name} />
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
}
