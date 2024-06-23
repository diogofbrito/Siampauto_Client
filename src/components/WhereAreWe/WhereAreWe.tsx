import { RightSide } from './RightSide/RightSide';

export function WhereAreWe() {
	return (
		<div className='text-white mt-12'>
			<div className='mb-10 text-center'>
				<h1 className='text-3xl font-bold'>Onde estamos?</h1>
				<p className='text-lg'>Encontre-nos no mapa</p>
			</div>
			<div className='grid lg:grid-cols-2 bg-grey-default rounded-3xl gap-8 items-center p-7 '>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5064377024028!2d-9.130827223506971!3d38.729139271760545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193393efae912f%3A0xb7816b5a92bed889!2sSiampauto-Soc.De%20Investimentos%20No%20Com%C3%A9rcio%20De%20Autom%C3%B3veis%2C%20Lda.!5e0!3m2!1spt-PT!2spt!4v1718933748446!5m2!1spt-PT!2spt'
					width='100%'
					height='450'
					style={{ border: '0' }}
					allowFullScreen
					referrerPolicy='no-referrer-when-downgrade'
					className='rounded-2xl'
				></iframe>
				<RightSide />
			</div>
		</div>
	);
}
