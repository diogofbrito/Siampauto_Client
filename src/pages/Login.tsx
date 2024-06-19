import { useEffect, useState } from 'react';
import { LoginForm } from '../components/AreaReservada/LoginForm';
import { SignupForm } from '../components/AreaReservada/SignUpForm';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export function AreaReservada() {
	const [isLogin, setIsLogin] = useState(true);
	const navegate = useNavigate();
	const { isLogged } = useAuth();

	useEffect(() => {
		if (isLogged) {
			navegate('/Welcome');
		}
	}, [isLogged, navegate]);

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
			<div className='rounded-3xl border p-8 w-full max-w-md bg-gray-800'>
				<h2 className='text-2xl font-semibold mb-4 text-center text-slate-200'>{isLogin ? 'Faça o seu login' : 'Crie uma nova conta'}</h2>
				{isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignupForm onSwitch={() => setIsLogin(true)} />}
			</div>
		</div>
	);
}
