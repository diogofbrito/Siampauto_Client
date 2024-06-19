import { useAuth } from '../contexts/AuthContext';

export function Welcome() {
	const { user, car } = useAuth();
	console.log(user);
	const date = new Intl.DateTimeFormat('pt-BR').format(new Date(user?.createdAt || new Date()));

	return (
		<div className='h-screen w-screen flex items-center justify-center text-white'>
			<div>Bem vindo {user?.fullName}, está loggado.</div>
			<img src={car?.PhotoList[0].Photo} style={{ width: '200px', height: '200px' }} />
			criou conta no dia {date}
		</div>
	);
}
