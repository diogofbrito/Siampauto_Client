import React from 'react';

interface ShowMoreButtonProps {
	onClick: () => void;
}

export const ShowMoreBtn: React.FC<ShowMoreButtonProps> = ({ onClick }) => (
	<div className='flex justify-center'>
		<button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'} onClick={onClick}>
			Mostrar Mais
		</button>
	</div>
);
