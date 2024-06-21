import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../../services/fetchSignUp';
import { useAuth } from '../../contexts/AuthContext';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'; 

import { Input, Button } from '@nextui-org/react';

import zxcvbn from 'zxcvbn';

interface SignupFormProps {
	onSwitch: () => void;
}

export function SignupForm({ onSwitch }: SignupFormProps) {
	const { loggin } = useAuth();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		fullName: '',
		nif: '',
		email: '',
		password: '',
		validationCode: '',
	});

	const [passwordScore, setPasswordScore] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'nif') {
			const nif = value.replace(/\D/g, '');
			setFormData({ ...formData, [name]: nif });
			return;
		}

		setFormData({ ...formData, [name]: value });

		if (name === 'password') {
			const score = zxcvbn(value).score;
			setPasswordScore(score);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formattedFullName = capitalizeFirstLetter(formData.fullName);

		try {
			const response = await fetchSignUp({
				fullName: formattedFullName,
				nif: formData.nif,
				email: formData.email,
				password: formData.password,
				validationCode: formData.validationCode,
			});
			loggin(response.token);
			setFormData({
				fullName: '',
				nif: '',
				email: '',
				password: '',
				validationCode: '',
			});
			navigate('/Welcome');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<Input type='text' name='fullName' label='Nome completo' placeholder='Nome Completo' fullWidth value={formData.fullName} onChange={handleChange} required />

			<Input type='text' name='nif' label='Número de Contribuinte' placeholder='Número de Contribuinte' fullWidth value={formData.nif} onChange={handleChange} required />

			<Input type='text' name='validationCode' label='Código de validação' placeholder='Código de validação' fullWidth value={formData.validationCode} onChange={handleChange} required />

			<Input type='email' name='email' label='Email' placeholder='Enter your email' fullWidth value={formData.email} onChange={handleChange} required />

			<Input label='Password' name='password' placeholder='Enter your password' type='password' fullWidth value={formData.password} onChange={handleChange} required />

			<div className='text-white'>Força da senha: {['Muito Fraca', 'Fraca', 'Média', 'Forte', 'Muito Forte'][passwordScore]}</div>
			<Button type='submit' className='bg-[#009342] text-white font-semibold py-2 rounded-2xl'>
				Sign up
			</Button>
			<div className='text-center mt-4 text-white'>
				Já está registado?{' '}
				<a className='text-blue-500 hover:underline' onClick={onSwitch}>
					Entrar
				</a>
			</div>
		</form>
	);
}
