import { StoreHours } from './StoreHours';
import { MapPin, Phone, Mail, Clock, Smartphone } from 'lucide-react';

export function RightSide() {
	return (
		<div className='p-5'>
			<div className='flex flex-col gap-3'>
				<div className='text-2xl font-semibold '>Siampauto</div>
				<div className='text-md flex gap-2'>
					<MapPin />
					Avenida General Roçadas 157B, 1170-159 Lisboa
				</div>
				<div className='text-md flex gap-2'>
					<Phone />
					<div className='text-md flex flex-col'>
						(+351) 218 144 498
						<div className='text-sm'>(Chamada para a rede fixa nacional)</div>
					</div>
				</div>
				<div className='text-md flex gap-2'>
					<Smartphone />
					<div className='text-md flex flex-col'>
						(+351) 919 853 686
						<div className='text-sm'>(Chamada para a rede móvel nacional)</div>
					</div>
				</div>
				<div className='text-md flex gap-2'>
					<Mail />
					siampauto1972@gmail.com
				</div>
				<div className='text-md flex gap-2'>
					<Clock />
					<StoreHours />
				</div>
			</div>
			<button className='block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-6'>Obter Direções</button>
		</div>
	);
}
