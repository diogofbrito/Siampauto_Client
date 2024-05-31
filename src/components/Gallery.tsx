import React, { useContext } from 'react';
import Slider from 'react-slick';
import { VehiclesContext } from '../contexts/VehiclesContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Gallery: React.FC = () => {
	const { vehicles, loading, error } = useContext(VehiclesContext);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
	};

	return (
		<div className='w-screen h-screen re	'>
			<Slider {...settings}>
				{vehicles.map((vehicle, index) => (
					<div key={index} className='flex items-center justify-center h-full'>
						<img src={vehicle.PhotoList[0].Photo} alt={`${vehicle.Brand} ${vehicle.Model}`} className='object-cover w-full h-full' />
					</div>
				))}
			</Slider>
		</div>
	);
};
