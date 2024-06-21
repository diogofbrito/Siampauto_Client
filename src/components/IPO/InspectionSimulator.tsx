import { useState } from 'react';


export function InspectionSimulator() {
	const [registrationDate, setRegistrationDate] = useState('');
	const [nextInspectionDate, setNextInspectionDate] = useState<Date | null>(null);

	function calculateNextInspection(){
		const today = new Date();
		const registrationDateObj = new Date(registrationDate);
		const yearsSinceRegistration = today.getFullYear() - registrationDateObj.getFullYear();

		if (yearsSinceRegistration < 4) {
			setNextInspectionDate(new Date(registrationDateObj.getFullYear() + 4, registrationDateObj.getMonth(), registrationDateObj.getDate()));
		} else if (yearsSinceRegistration < 8) {
			const lastInspectionYear = registrationDateObj.getFullYear() + 4 + Math.floor((yearsSinceRegistration - 4) / 2) * 2;
			setNextInspectionDate(new Date(lastInspectionYear + 2, registrationDateObj.getMonth(), registrationDateObj.getDate()));
		} else {
			setNextInspectionDate(new Date(today.getFullYear() + 1, registrationDateObj.getMonth(), registrationDateObj.getDate()));
		}
	};

	return (
		<div className='p-4 bg-slate-300 rounded-xl'>
			<h1 className='text-2xl font-bold mb-4'>Simulador de Próxima Inspeção</h1>

			<div className='mb-4'>
				<label htmlFor='registrationDate' className='block mb-2'>
					Data da Primeira Matrícula:
				</label>
				<input type='date' id='registrationDate' value={registrationDate} onChange={e => setRegistrationDate(e.target.value)} className='border rounded bg-red-50 p-2' />
			</div>

			<button onClick={calculateNextInspection} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Calcular
			</button>

			{nextInspectionDate && <p className='mt-4'>O seu veículo terá que ir à inspecção nos três meses anteriores a {nextInspectionDate.toLocaleDateString()}</p>}
		</div>
	);
}

