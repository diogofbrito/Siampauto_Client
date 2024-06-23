import { useAuth } from '../contexts/AuthContext';
export function ProfileUser() {
	const { user } = useAuth();
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
					<button className='text-xs bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full'>Eliminar conta</button>
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
