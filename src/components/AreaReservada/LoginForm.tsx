import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@nextui-org/react';
import { fetchLogin } from '../../services/fetchLogin';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';

interface LoginFormProps {
	onSwitch: () => void;
}
export function LoginForm({ onSwitch }: LoginFormProps) {
	const { loggin } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetchLogin({ email, password });
			loggin(response.token);
			toast.success('Login efetuado com sucesso!');
			navigate('/Welcome');
		} catch {
			toast.error('Login falhou!');
			console.error('Login failed');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<Input type='email' label='Email' placeholder='Insira o seu email' fullWidth value={email} onChange={e => setEmail(e.target.value)} required />

			<Input label='Password' placeholder='Insira a sua password' type='password' fullWidth value={password} onChange={e => setPassword(e.target.value)} required />

			<button type='submit' className='mt-3 text-center w-full text-white font-semibold py-2 bg-green-link hover:bg-grey-title rounded-full'>
				Entrar
			</button>
			<div className='text-center mt-2 text-white'>
				Ainda não é membro?{' '}
				<a className='text-green-link hover:underline font-semibold' onClick={onSwitch}>
					Cria uma conta agora.
				</a>
			</div>
		</form>
	);
}
