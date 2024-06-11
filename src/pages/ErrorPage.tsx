import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function ErrorPage() {

		useEffect(() => {
			const timer = setTimeout(() => {
				window.location.href = '/';
			}, 5000);

			return () => clearTimeout(timer);
		}, []);
	return (
		<>
		
			<div className=' h-screen w-screen pt-24 text-center sm:py-32 lg:px-8'>
				<div className='text-center'>
					<p className='text-base font-semibold text-white'>Erro 404</p>
					<h1 className=' text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl'>Página não encontrada</h1>
					<p className='mt-4 text-base leading-7 text-gray-100'>Iremos reencaminhar para a página principal em 5 segundos...</p>
					
				</div>
			</div>
		</>
	);
}
