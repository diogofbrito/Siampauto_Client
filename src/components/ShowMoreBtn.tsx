import React from 'react';

interface ShowMoreButtonProps {
	onClick: () => void;
}

export const ShowMoreBtn: React.FC<ShowMoreButtonProps> = ({ onClick }) => (
	<div className='flex justify-center'>
		<button className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full text-center' onClick={onClick}>
			Mostrar Mais
		</button>
	</div>
);
