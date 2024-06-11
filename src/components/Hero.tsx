import React from 'react';
/* import { CarSearchFilter } from './CarSearchFilter';
 */
interface HeroProps {
	imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
	return (
		<div className='w-screen h-screen flex items-center justify-center ' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',  }}>
			{/* <CarSearchFilter /> */}
		</div>
	);
}
