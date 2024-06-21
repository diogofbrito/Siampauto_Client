import { useState, useEffect } from 'react';
import { TriangleAlert, Store } from 'lucide-react';

const getNextWeekday = (date: Date) => {
	const day = date.getDay();
	let nextDay = day === 5 ? 1 : 1 + (day === 6 ? 1 : 0);
	const nextDate = new Date(date);
	nextDate.setDate(date.getDate() + nextDay);
	return nextDate;
};

export function StoreHours() {
	const [status, setStatus] = useState<string>('');

	useEffect(() => {
		const checkStatus = () => {
			const now = new Date();
			const day = now.getDay();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			const isWeekday = day >= 1 && day <= 5;
			const isMorningOpen = (hours === 10 && minutes >= 0) || (hours > 10 && hours < 13);
			const isAfternoonOpen = (hours === 14 && minutes >= 30) || (hours > 14 && hours < 18);
			const isAlmostOpen = (hours === 9 && minutes >= 30) || (hours === 14 && minutes < 30);
			const isAlmostClosed = (hours === 12 && minutes >= 30) || (hours === 17 && minutes >= 30);

			if (!isWeekday) {
				setStatus(`Abre ${getNextWeekday(now).toLocaleDateString('pt-PT', { weekday: 'long' })} às 10h`);
				return;
			}

			if (isMorningOpen || isAfternoonOpen) {
				setStatus('Aberto');
			} else if (isAlmostOpen) {
				setStatus('Abre em breve');
			} else if (isAlmostClosed) {
				setStatus('Fecha em breve');
			} else {
				setStatus(`Abre ${getNextWeekday(now).toLocaleDateString('pt-PT', { weekday: 'long' })} às 10h`);
			}
		};

		checkStatus();
		const interval = setInterval(checkStatus, 60000);

		return () => clearInterval(interval);
	}, []);

	const statusClass = status === 'Aberto' ? 'text-green-500' : 'text-yellow-500';
	const isOpen = status === 'Aberto';

	return (
		<div>
			<div className={`text-lg flex gap-2 font-semibold ${statusClass}`}>
				{isOpen ? <Store /> : <TriangleAlert />}
				{status}
			</div>
			<span className='mt-2'>
				<p>Segunda a Sexta: 10h - 13h, 14:30h - 18h</p>
				<p>Fins de semana e feriados: Fechado</p>
			</span>
		</div>
	);
}
