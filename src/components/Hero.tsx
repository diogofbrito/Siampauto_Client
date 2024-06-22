interface HeroProps {
	imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
	return (
		<div className='h-screen w-screen' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',  }}>
			
		</div>
	);
}
