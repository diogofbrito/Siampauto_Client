import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDelete } from '../../services/fetchDelete';

interface DeleteBtnProps {
	logout: () => void;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ logout }) => {
	const [showModal, setShowModal] = useState(false);
	const navegate = useNavigate();

	async function handleDelete() {
		try {
			await fetchDelete();
			logout();
			navegate('/');
		} catch (err) {
			console.error('Error deleting account:', err);
		}
	}

	return (
		<>
			<button className='text-xs bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full' onClick={() => setShowModal(true)}>
				Eliminar conta
			</button>

			{showModal && (
				<div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
					<div className='bg-white p-6 rounded'>
						<p>Tem a certeza que deseja apagar a conta?</p>
						<div className='flex justify-end mt-4'>
							<button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2' onClick={handleDelete}>
								Sim
							</button>
							<button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded' onClick={() => setShowModal(false)}>
								Não
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DeleteBtn;
