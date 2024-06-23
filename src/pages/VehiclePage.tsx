import { Link, useParams } from 'react-router-dom';
import { useVehicles } from '../contexts/VehiclesContext.tsx';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe.tsx';
import { PageSpecifics } from '../components/VehiclePage/PageSpecifics.tsx';
import { ExtrasSpecifics } from '../components/VehiclePage/ExtrasSpecifics.tsx';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export function VehiclePage() {
	const { id } = useParams();
	const { vehicles, loading, error, formatEquipmentList } = useVehicles();

	if (loading) return <div>ACarregar...</div>;
	if (error) return <div>{error}</div>;

	const vehicle = vehicles.find(vehicle => vehicle.ID === Number(id));
	if (!vehicle) return <div>Projeto não encontrado</div>;

	return (
		<div className='global-container'>
			<div className='grid grid-cols-1 lg:grid-cols-2  text-white gap-10 bg-grey-default rounded-3xl p-6'>
				<div className='rounded-5xl'>
					<ImageGallery items={vehicle.PhotoList.map(photo => ({ original: photo.Photo }))} showPlayButton={false} showFullscreenButton={false} autoPlay slideInterval={5000} />
				</div>
				<div>
					<div className=' text-white flex justify-between mb-6'>
						<div>
							<div className='text-2xl font-bold md:text-4xl'>
								{vehicle.Brand}</div>
							<div className='text-xl md:text-2xl -mt-1'>
								{vehicle.Model} {vehicle.Version}</div>
						</div>
						<p className='text-3xl md:text-4xl   font-bold text-green-link'>{vehicle.Price} €</p>
					</div>

					<PageSpecifics vehicle={vehicle} />

					<div className='flex gap-4 pt-6 justify-center'>
						<a href='tel:+351910091775' className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full text-center'>
							Tem interesse? Contacte-nos
						</a>
					</div>
					<div className='pt-6 text-sm text-grey-title'>
						Nota: Este anúncio foi criado por rotina informática, todos os dados carecem de confirmação junto do vendedor, a nossa empresa não se responsabiliza por itens de carácter obrigatório na
						plataforma colocados nos anúncios
					</div>
				</div>
			</div>

			<ExtrasSpecifics vehicle={vehicle} formatEquipmentList={formatEquipmentList} />

			<div className='flex justify-center'>
				<Link to={'/Stock'} className='text-center bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full mt-8'>
					Voltar ao Stock
				</Link>
			</div>

			<WhereAreWe />
		</div>
	);
}
