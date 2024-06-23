import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export function UserInfoPanel({ user }: { user: { fullName: string; email: string; nif: string, createdAt: string }  } ) {
	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

	return (
		<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
			<div className=' text-gray-500'>Sobre o utilizador</div>
			<div className=' flex flex-col gap-2 pt-4'>
				<div>
					<p className='text-grey-title text-sm'>Nome</p>
					<div className='text-xl'>{formattedName}</div>
				</div>
				<div>
					<p className='text-grey-title text-sm'>Email</p>
					<div className='text-xl'>{user.email}</div>
				</div>
				<div>
					<p className='text-grey-title text-sm'>Criou conta em</p>
					<div className='text-xl'>
						{new Date(user.createdAt).toLocaleDateString()} às {new Date(user.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
					</div>
				</div>
			</div>

			<div className='text-center pt-8'>
				<Link to='/Perfil' className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full mt-4 text-center'>
					Aceder ao seu perfil
				</Link>
			</div>
		</div>
	);
}
