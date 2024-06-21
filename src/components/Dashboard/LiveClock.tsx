import { useState, useEffect } from 'react';

export function LiveClock() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000); 

		return () => clearInterval(interval);
	}, []);

	const formattedTime = currentTime.toLocaleTimeString('pt-PT', {
		timeZone: 'Europe/Lisbon',
		hour12: false, 
		hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
	});

	return <div className='font-bold text-xl'>Hora local: {formattedTime}</div>;
}
