import React, { useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';
import { NoteData } from '../../types/note';
import { toast } from 'sonner';


export function FormNotes() {
	const { createNote } = useNotes();
	const [title, setTitle] = useState('');
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	const [content, setContent] = useState('');

	const handleCreateNote = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const noteData: NoteData = {
				title,
				content,
				date: new Date(date),
				updatedAt: new Date(),
			};
			await createNote(noteData);
			setTitle('');
			setDate(new Date().toISOString().slice(0, 10));
			setContent('');
			toast.success('Nota criada com sucesso!');
		} catch (err) {
			toast.error('Erro ao criar nota.');
			console.error('Erro ao criar nota:', err);
		}
	};

	return (
		<div className='py-6'>
			<form onSubmit={handleCreateNote} className='flex flex-col gap-4'>
				<div className='flex flex-col gap-1'>
					<label htmlFor='title' className='text-grey-title'>
						Título
					</label>
					<input
						type='text'
						id='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
						className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none'
						placeholder='Ex. Oficina do Sr Marques'
						required
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='date' className='text-grey-title'>
						Data
					</label>
					<input type='date' id='date' value={date} onChange={e => setDate(e.target.value)} className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none' required />
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='content' className='text-grey-title'>
						Conteúdo
					</label>
					<textarea
						id='content'
						value={content}
						onChange={e => setContent(e.target.value)}
						className=' rounded-xl bg-grey-text text-grey-default p-2 focus:outline-none'
						rows={4}
						placeholder='Ex. Revisão aos 15.000km. Mudança de pastilhas, óleos...'
						required
					></textarea>
				</div>
				<div>
					<button type='submit' className='bg-green-link hover:bg-grey-title text-white font-bold py-1 px-4 rounded-full text-center'>
						Criar Nota
					</button>
				</div>
			</form>
		</div>
	);
}
