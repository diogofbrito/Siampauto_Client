import { StoreHours } from './Contacts/StoreHours';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function WhereAreWe() {
	return (
		<div className='text-white'>
			<h1 className='text-2xl font-bold mb-4'>Onde estamos?</h1>
			<div className='grid grid-cols-2  bg-slate-200  rounded-2xl gap-8'>
				<div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5064377024028!2d-9.130827223506971!3d38.729139271760545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193393efae912f%3A0xb7816b5a92bed889!2sSiampauto-Soc.De%20Investimentos%20No%20Com%C3%A9rcio%20De%20Autom%C3%B3veis%2C%20Lda.!5e0!3m2!1spt-PT!2spt!4v1718933748446!5m2!1spt-PT!2spt'
						width='100%'
						height='450'
						style={{ border: '0' }}
						allowFullScreen
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
				<div className='p-5 bg-slate-400 flex flex-col gap-3'>
					<div className='text-2xl font-semibold '>Siampauto</div>
					<div className='text-lg flex gap-2'>
						<MapPin />
						Avenida General Roçadas 157B, 1170-159 Lisboa
					</div>
					<div className='text-lg flex gap-2'>
						<Phone />
						(+351) 218 144 498
					</div>
					<div className='text-lg flex gap-2'>
						<Phone />
						(+351) 919 853 686
					</div>
					<div className='text-lg flex gap-2'>
						<Mail />
						siampauto1972@gmail.com
					</div>

					<div className='text-lg flex gap-2'>
						<Clock />
						<StoreHours />
					</div>

					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>OBTER DIREÇÕES</button>
				</div>
			</div>
		</div>
	);
}
