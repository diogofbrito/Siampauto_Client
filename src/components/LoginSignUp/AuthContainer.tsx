import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignUpForm';

export function AuthContainer() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
			<div className='rounded-3xl border p-8 w-full max-w-md bg-gray-800'>
				<h2 className='text-2xl font-semibold mb-4 text-center text-slate-200'>{isLogin ? 'Faça o seu login' : 'Crie uma nova conta'}</h2>
				{isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignupForm onSwitch={() => setIsLogin(true)} />}
				<div className='mt-6 text-center text-white'>
					Ou continue com
					<div className='flex items-center justify-center mt-2'>
						<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mr-2'>G Google</button>
						<button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline'>
							<i className='fab fa-github'></i> GitHub
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
