import { CheckCheck, Euro, CarFront, Wrench } from 'lucide-react';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';

export function Services() {
	return (
		<div className='global-container flex flex-col gap-10 text-white'>
			<div className='flex flex-col items-center'>
				<div className='text-4xl font-bold mb-4 text-white'>Os nossos serviços</div>
			</div>

			<div className='px-20 flex flex-col gap-6'>
				<div className='flex flex-row gap-10 items-center'>
					<CheckCheck size={50} />
					<div>
						<p className='text-2xl font-bold text-green-link'>Garantia</p>
						<p className='text-xl'>Na compra de qualquer automóvel do nosso stock, oferecemos garantia por escrito de 18 meses ao abrigo do decreto-lei nº 84/2008.</p>
					</div>
				</div>

				<div className='flex flex-row gap-10 items-center'>
					<Euro size={50} />
					<div>
						<p className='text-2xl font-bold text-green-link'>Financiamento</p>
						<p className='text-xl'>Para alem de aceitarmos qualquer tipo de retoma, facilitamos o pagamento até 120 meses com as melhores taxas do mercado.</p>
					</div>
				</div>

				<div className='flex flex-row gap-10 items-center'>
					<CarFront size={50} />
					<div>
						<p className='text-2xl font-bold text-green-link'>Consultoria</p>
						<p className='text-xl'>Procura uma viatura específica? Fale connosco. Tratamos da importação e legalização da mesma.</p>
					</div>
				</div>

				<div className='flex flex-row gap-10 items-center'>
					    <Wrench  size={50} />
					<div>
						<p className='text-2xl font-bold text-green-link'>Manutenção</p>
						<p className='text-xl'>
							Na Siampauto o serviço pós venda é fundamental e é por isso que dispomos de uma oficina multi-marcas, com funcionários especializados e com vários anos de experiência.
						</p>
					</div>
				</div>
            </div>
            <WhereAreWe />
		</div>
	);
}
