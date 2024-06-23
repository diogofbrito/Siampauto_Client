import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

export function ProfileUser() {
    const { user, updateUser } = useAuth();
    	const formattedName = user ? capitalizeFirstLetter(user.fullName) : '';

	const [formData, setFormData] = useState({
		dateBirth: user?.dateBirth ? user.dateBirth.toISOString().split('T')[0] : '',
		address: user?.address || '',
		city: user?.city || '',
		phoneNumber: user?.phoneNumber || '',
	});

	useEffect(() => {
		if (user) {
			setFormData({
				dateBirth: user.dateBirth ? user.dateBirth.toISOString().split('T')[0] : '',
				address: user.address || '',
				city: user.city || '',
				phoneNumber: user.phoneNumber || '',
			});
		}
	}, [user]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await updateUser({
				...user!,
				dateBirth: formData.dateBirth ? new Date(formData.dateBirth) : null,
				address: formData.address,
				city: formData.city,
				phoneNumber: formData.phoneNumber,
			});
			console.log('Dados do usuário atualizados com sucesso!');
		} catch (error) {
			console.error('Erro ao atualizar dados do usuário:', error);
		}
	};

	if (!user) {
		return <div>Carregando...</div>;
	}

    return (
			<div className='h-screen flex flex-col p-24 items-center'>
				<div className='flex flex-col text-white bg-grey-default rounded-3xl p-6 gap-6 '>
					<div className='font-bold text-3xl flex justify-between'>
						<div>Dados do utilizador</div>
						df{' '}
					</div>
					<p>Nome: {formattedName}</p>
					<p>NIF: {user.nif}</p>
					<p>Email: {user.email}</p>
					<p>Data de Criação: {user.createdAt instanceof Date ? user.createdAt.toLocaleDateString() : ''}</p>

					<form onSubmit={handleSubmit}>
						<label>
							Data de Nascimento:
							<input type='date' name='dateBirth' value={formData.dateBirth} onChange={handleChange} />
						</label>

						<label>
							Endereço:
							<input type='text' name='address' value={formData.address} onChange={handleChange} />
						</label>

						<label>
							Cidade:
							<input type='text' name='city' value={formData.city} onChange={handleChange} />
						</label>

						<label>
							Número de Telefone:
							<input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
						</label>

						<button type='submit'>Atualizar Perfil</button>
					</form>
				</div>
			</div>
		);
}

