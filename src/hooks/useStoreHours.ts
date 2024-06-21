import { useState, useEffect } from 'react';

const storeHours = {
	weekdays: {
		openMorning: 10 * 60, 
		closeMorning: 13 * 60, 
		openAfternoon: 14 * 60 + 30, 
		closeAfternoon: 18 * 60, 
	},
};

const holidays = [
	'2024-01-01', 
	'2024-04-25', 
	
];

export function useStoreHours ()  {
	const [status, setStatus] = useState('Fechado');

	useEffect(() => {
		const checkStatus = () => {
			const now = new Date();
			const dayOfWeek = now.getDay();
			const minutes = now.getHours() * 60 + now.getMinutes();
			const currentDate = now.toISOString().split('T')[0];

			if (holidays.includes(currentDate)) {
				setStatus('Fechado');
				return;
			}

			if (dayOfWeek === 0 || dayOfWeek === 6) {
				setStatus('Fechado');
				return;
			}

			const { openMorning, closeMorning, openAfternoon, closeAfternoon } = storeHours.weekdays;

			if (minutes < openMorning) {
				setStatus(minutes >= openMorning - 30 ? 'Abre em breve' : 'Fechado');
			} else if (minutes < closeMorning) {
				setStatus(minutes >= closeMorning - 30 ? 'Fecha em breve' : 'Aberto');
			} else if (minutes < openAfternoon) {
				setStatus(minutes >= openAfternoon - 30 ? 'Abre em breve' : 'Fechado');
			} else if (minutes < closeAfternoon) {
				setStatus(minutes >= closeAfternoon - 30 ? 'Fecha em breve' : 'Aberto');
			} else {
				setStatus('Fechado');
			}
		};

		const intervalId = setInterval(checkStatus, 60000); 

		checkStatus(); 

		return () => clearInterval(intervalId); 
	}, []);

	return status;
};

export default useStoreHours;
