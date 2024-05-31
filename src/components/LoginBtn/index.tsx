import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './style.css';
import { useState } from 'react'; // Importe o useState

export function LoginBtn() {
	const [email, setEmail] = useState(''); // Estado para o email
	const [password, setPassword] = useState(''); // Estado para a senha

	

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className='radius violet'>Login</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='DialogOverlay' />
				<Dialog.Content className='DialogContent'>
					<form >
						<Dialog.Title className='DialogTitle'>Bem vindo</Dialog.Title>
						<Dialog.Description className='DialogDescription'>Faça login para continuar.</Dialog.Description>

						<fieldset className='Fieldset'>
							<label className='Label'>Email</label>
							<input className='Input' id='name' type='email' defaultValue='O seu email' value={email} onChange={e => setEmail(e.target.value)} />
						</fieldset>
						<fieldset className='Fieldset'>
							<label className='Label' htmlFor='username'>
								Password
							</label>
							<input className='Input' id='username' type='password' defaultValue='@peduarte' value={password} onChange={e => setPassword(e.target.value)} />
						</fieldset>
						<div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
							<Dialog.Close asChild>
								<button type='submit' className='radius green'>
									Login
								</button>
							</Dialog.Close>
						</div>

						<Dialog.Close asChild>
							<button className='IconButton' aria-label='Close'>
								<Cross2Icon />
							</button>
						</Dialog.Close>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
