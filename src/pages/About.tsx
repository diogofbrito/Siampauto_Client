import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';

export function About() {
	return (
		<div className='global-container flex flex-col gap-10'>
			<div className='flex flex-col items-center'>
				<div className='text-4xl font-bold mb-4 text-white'>A Siampauto</div>
			</div>
			<div className='text-white flex flex-row bg-grey-default rounded-3xl p-10 gap-10 '>
				<div>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/VRdDZTY2Bjc?si=Eaor0k0AQvSNa8GC'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</div>
				<div>
					<div className='text-2xl font-bold mb-4 text-green-link'>Há mais de meio século atrás...</div>
					Há mais de meio século, nasceu o que se viria a tornar um dos stands de automóveis mais emblemáticos e antigos de Lisboa, a Siampauto. Fundada por um grupo de técnicos especializados e
					focados na Mercedes-Benz, a Siampauto dedica-se desde 1972 a trazer até si a excelência e a tecnologia do mundo automóvel, consolidando uma reputação singular que a torna referência no
					mercado. Procurando adaptar-nos à versatilidade do sector, expandimos o nosso stock e conhecimento para incluir outras marcas de prestígio e confiança. Esta abordagem multifacetada reflete o
					nosso compromisso constante com a qualidade e o profissionalismo, valores que mantemos para satisfazer as necessidades e expectativas dos nossos estimados clientes.
				</div>
			</div>
			<WhereAreWe />
		</div>
	);
}
