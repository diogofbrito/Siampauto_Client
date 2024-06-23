import { useEffect, useState } from 'react';
import { fetchAutomobilesNews } from '../services/fetchNews';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { New } from '../types/new';

export function News() {
	const [news, setNews] = useState<New[]>([]);

	useEffect(() => {
		async function fetchData() {
			const result = await fetchAutomobilesNews();
			setNews(result);

		}
		fetchData();
	}, []);

	return (
		<div className='text-white rounded-3xl bg-grey-default p-6'>
			<div className=' text-gray-500 pb-4'>
				Últimas noticias do mercado automóvel
				<div className='text-xs'>
					<a href='https://www.nytimes.com/' target='_blank' rel='noopener noreferrer'>
						fonte: nytimes.com
					</a>
				</div>
			</div>
			<ScrollShadow className='w-[100%] h-[650px]'>
				<div className='flex flex-col gap-6'>
					{news.map((article, index) => (
						<div key={index} className='flex flex-col gap-6 bg-grey-boxCard rounded-xl p-5'>
							<img src={article.multimedia?.[0]?.url} alt={article.title} className='w-full h-[240px] object-cover rounded-2xl' />

							<div className='flex flex-col '>
								<div className='text-xs text-grey-title pb-2'>{article.byline}</div>
								<div className='text-lg font-bold leading-6 '>{article.title}</div>
								<div className='text-md pt-2 text-grey-title leading-5'>{article.abstract}</div>
							</div>

							<a href={article.url} target='_blank' rel='noopener noreferrer'>
								Ler mais
							</a>
						</div>
					))}
				</div>
			</ScrollShadow>
		</div>
	);
}
