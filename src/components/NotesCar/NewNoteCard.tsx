/* import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input, DateInput } from '@nextui-org/react';
import { CalendarDate } from '@internationalized/date';



export function NewNoteCard() {
	const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [modalPlacement, setModalPlacement] = React.useState('auto');

	const [content, setContent] = useState('');

	const { createNote } = useNotes();

	function handleStartEditor() {
		setShouldShowOnboarding(false);
	}

	function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
		setContent(event.target.value);

		if (event.target.value === '') {
			setShouldShowOnboarding(true);
		}
	}

	function handleSaveNote(event: FormEvent) {
		event.preventDefault();

		if (content === '') {
			return;
		}

		createNote(content).then(() => {
			setContent('');
			setShouldShowOnboarding(true);

			toast.success('Foi criada uma nota com sucesso');
		});
	}


	return (
		<div className='text-left flex flex-col rounded-xl bg-grey-boxCard p-5 gap-3 '>
			<span className='text-base font-medium text-slate-200'>Adicione a sua primeira nota</span>
			<p className='text-sm leading-6 text-grey-title'>Aqui pode adicionar todo o histórico do seu veículo, desde inspeções, manutenções e muito mais.</p>
			<Button onPress={onOpen} className='max-w-fit'>
				Criar Nota
			</Button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1 bg-grey-boxCard text-grey-title'>Registe o histórico do seu carro.</ModalHeader>
							<ModalBody className='bg-grey-boxCard'>
								<Input type='text' label='Título' placeholder='Ex. Oficina do Sr. Marques' />
								<DateInput label={'Data'} placeholderValue={new CalendarDate(1995, 11, 6)} />
								<Textarea label='Descrição' placeholder='Ex. Foi feito a troca de óleo e filtros; verificou o estado dos pneus, fez uma inspeção visual... ' className='w-full ' />
							</ModalBody>
							<ModalFooter className='bg-grey-boxCard'>
								<Button color='danger' variant='light' onPress={onClose}>
									Fechar
								</Button>
								<Button onPress={onClose}>Criar nota</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
 */