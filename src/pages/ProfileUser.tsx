import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UpdateData } from '../services/fetchUpdate';
import { DeleteBtn } from '../components/DeleteUser/DeleteBtn';
import { WhereAreWe } from '../components/WhereAreWe/WhereAreWe';

export function ProfileUser() {
	const { user, updateProfile, loading, logout } = useAuth();
	const [formData, setFormData] = useState({
		dateBirth: user?.dateBirth || '',
		address: user?.address || '',
		city: user?.city || '',
		phoneNumber: user?.phoneNumber || '',
	});

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const updatedData: UpdateData = {
				...formData,
				dateBirth: formData.dateBirth ? new Date(formData.dateBirth) : undefined,
			};
			await updateProfile(updatedData);
		} catch (error) {
			console.error('Erro ao atualizar perfil:', error);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className='global-container'>
			<div className='flex flex-col gap-10'>
				<div className='flex flex-row justify-between'>
					<div className='text-4xl font-bold mb-4 text-white'>Dados do utilizador</div>
					<div>
						<DeleteBtn logout={logout} />
					</div>
				</div>
				<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<div>
						<p className='text-grey-title text-sm leading-2'>título</p>
						<div className=' text-white text-md'>{user?.fullName}</div>
					</div>

					<div>
						<p className='text-grey-title text-sm leading-2'>email</p>
						<div className=' text-white text-lg'>{user?.email}</div>
					</div>

					<div>
						<p className='text-grey-title text-sm leading-2'>contribuinte</p>
						<div className=' text-white text-lg'>{user?.nif}</div>
					</div>

					<div>
						<p className='text-grey-title text-sm pb-2'>data de nascimento</p>
						<input
							type='date'
							id='dateBirth'
							name='dateBirth'
							value={formData.dateBirth instanceof Date ? formData.dateBirth.toISOString().split('T')[0] : formData.dateBirth}
							onChange={handleChange}
							className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none'
						/>
					</div>
					<div>
						<p className='text-grey-title text-sm pb-2'>morada</p>
						<input
							type='text'
							id='address'
							name='address'
							placeholder='Morada'
							value={formData.address}
							onChange={handleChange}
							className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none'
						/>
					</div>
					<div>
						<p className='text-grey-title text-sm pb-2'>cidade</p>
						<input type='text' id='city' name='city' value={formData.city} placeholder='Cidade' onChange={handleChange} className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none' />
					</div>
					<div>
						<p className='text-grey-title text-sm pb-2'>contacto telefónico</p>
						<input
							type='text'
							id='phoneNumber'
							name='phoneNumber'
							placeholder='Contacto telefónico'
							value={formData.phoneNumber}
							onChange={handleChange}
							className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none'
						/>
					</div>
					<div className='pt-4'>
						<button type='submit' disabled={loading} className='bg-green-link hover:bg-grey-title text-white font-bold py-1 px-4 rounded-full text-center'>
							{loading ? 'Atualizando...' : 'Salvar'}
						</button>
					</div>
				</form>
			</div>
			<WhereAreWe />
		</div>
	);
}
