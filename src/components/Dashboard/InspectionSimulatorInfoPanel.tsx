import { useState } from 'react';

export function InspectionSimulatorInfoPanel() {
	const [registDate, setRegistDate] = useState('');
	const [nextInspecDate, setNextInspecDate] = useState<Date | null>(null);

	function calculateNextInspection() {
		const today = new Date();
		const registDateObj = new Date(registDate);
		const yearsSinceRegist = today.getFullYear() - registDateObj.getFullYear();

		if (yearsSinceRegist < 4) {
			setNextInspecDate(new Date(registDateObj.getFullYear() + 4, registDateObj.getMonth(), registDateObj.getDate()));
		} else if (yearsSinceRegist < 8) {
			const lastInspectionYear = registDateObj.getFullYear() + 4 + Math.floor((yearsSinceRegist - 4) / 2) * 2;
			setNextInspecDate(new Date(lastInspectionYear + 2, registDateObj.getMonth(), registDateObj.getDate()));
		} else {
			setNextInspecDate(new Date(today.getFullYear() + 1, registDateObj.getMonth(), registDateObj.getDate()));
		}
	}

	return (
		<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
			<div className=' text-gray-500'>Quer saber a próxima inspeção do seu veiculo ou de outro?</div>

			<div className='pt-4 flex flex-col gap-4 '>
				<div>
					<div className='block mb-2'>Insira a data da primeira matrícula</div>
					<input type='date' id='registrationDate' value={registDate} onChange={e => setRegistDate(e.target.value)} className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none' />
					<div className='text-white text-xs pt-2'>
						Nota: A data da próxima inspeção, obtida neste simulador, pressupõe que a última inspeção obrigatória foi realizada. Em caso de dúvida, consulte{' '}
						<a href='https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Inspecao/TiposInspeccoes/Paginas/TiposdeInspecoes.aspx' target='_blank' className='text-green-link'>
							aqui
						</a>{' '}
						informação adicional sobre inspeção de veículos.
					</div>
				</div>
				<div className='flex justify-center'>
					<button onClick={calculateNextInspection} className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full text-center'>
						Calcular
					</button>
				</div>
			</div>

			{nextInspecDate && <p className='mt-4'>O seu veículo terá que ir à inspecção nos três meses anteriores a {nextInspecDate.toLocaleDateString()}</p>}
		</div>
	);
}

