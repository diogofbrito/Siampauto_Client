import { useAuth } from '../contexts/AuthContext';

export function Welcome() {
	const { user } = useAuth();
	console.log(user);

	return (
		<div className="h-screen w-screen flex items-center justify-center text-white">
			<div>Bem vindo {user?.fullName}, está loggado.</div>


		</div>
	);
}
