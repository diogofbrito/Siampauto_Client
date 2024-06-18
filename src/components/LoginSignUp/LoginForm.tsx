import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Checkbox } from '@nextui-org/react';
import { fetchLogin } from '../../services/fetchLogin';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormProps {
	onSwitch: () => void;
}
export function LoginForm({ onSwitch }: LoginFormProps) {
	const { loggin } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetchLogin({ email, password });
			loggin(response.token);
			navigate('/Welcome');
		} catch {
			console.error('Login failed');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<Input type='email' label='Email' placeholder='Enter your email' fullWidth value={email} onChange={e => setEmail(e.target.value)} required />

			<Input label='Password' placeholder='Enter your password' type='password' fullWidth value={password} onChange={e => setPassword(e.target.value)} required />

			<div className='flex items-center justify-between'>
				<Checkbox isSelected={rememberMe} onChange={() => setRememberMe(!rememberMe)} color='default'>
					Lembrar-se de mim
				</Checkbox>
				<a href='#' className='text-sm text-[#009342]'>
					Esqueceu-se da password?
				</a>
			</div>
			<button type='submit' className='text-center w-full bg-[#009342] text-white font-semibold py-2 rounded-2xl focus:outline-none focus:ring focus:border-blue-700 hover:bg-blue-700'>
				Sign in
			</button>
			<div className='text-center mt-4 text-white'>
				Ainda não é membro?{' '}
				<a href='#' className='text-[#009342] hover:underline font-semibold' onClick={onSwitch}>
					Criar conta agora
				</a>
			</div>
		</form>
	);
}

// FAZER LOGIN
