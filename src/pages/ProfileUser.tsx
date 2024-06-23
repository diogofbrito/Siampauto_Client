import { useAuth } from '../contexts/AuthContext';
import DeleteBtn from '../components/DeleteUser/DeleteBtn';

export function ProfileUser() {
	const { user, logout } = useAuth();
	return (
		<div className='flex flex-col text-white p-24'>
			<div className='rounded-3xl overflow-hidden p-6 bg-grey-default'>
				<div className='flex justify-between'>
					<div className='font-bold text-3xl'>
						Dados do utilizador
							{user?.createdAt && (
								<div className='text-grey-title text-sm'>
									Conta criada no dia {new Date(user.createdAt).toLocaleDateString()} às {new Date(user.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
								</div>
							)}
					</div>
					<DeleteBtn logout={logout}/>
					
				</div>
				<div className='mt-4'>
					<div className='text-md mb-4 text-white'>Nome {user?.fullName}</div>
					<div className='text-md mb-4 text-white'>Contribuinte {user?.nif}</div>
					<div className='text-md mb-4 text-white'>Email {user?.email}</div>
				</div>
			</div>
		</div>
	);
}
