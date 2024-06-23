import { useEffect, useState } from 'react';
import { fetchWeather } from '../../services/fetchWeather';
import { Weather } from '../../types/weather';

export function WeatherInfoPanel() {
	const [weatherData, setWeatherData] = useState<Weather[]>([]);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const data = await fetchWeather();
				setWeatherData(data);
			} catch (error) {
				console.error('Erro ao buscar dados meteorológicos:', error);
			}
		};

		fetchWeatherData();
	}, []);

	return (
		<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
			<div className=' text-gray-500 pb-4 '>Previsão do tempo para o dia de hoje</div>

			<div className='flex flex-row gap-5  justify-center'>
				{weatherData.map((data, index) => (
					<div key={index} className='bg-grey-boxCard rounded-xl p-5 flex flex-col justify-center align-middle items-center'>
						{data.city}
						<img src={`http://openweathermap.org/img/wn/${data.icon}.png`} alt='Weather Icon' />
						<div>{data.temperature}°C</div>
						{data.description}
					</div>
				))}
			</div>
		</div>
	);
}
