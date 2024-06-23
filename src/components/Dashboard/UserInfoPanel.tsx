import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export function UserInfoPanel({ user }: { user: { fullName: string; email: string; nif: string }  } ) {
	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

	return (
		<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
			<div className=' text-gray-500'>Dados de utilizador</div>
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
					<p className='text-grey-title text-sm'>Contribuinte</p>
					<div className='text-xl'>{user.nif}</div>
				</div>
			</div>

			<div className='text-center pt-8'>
				<Link to='/profile' className='bg-green-link hover:bg-grey-title text-white font-bold py-2 px-5 rounded-full mt-4 text-center'>
					Atualizar perfil
				</Link>
			</div>
		</div>
	);
}
