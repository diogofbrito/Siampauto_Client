import { useNotes } from '../../contexts/NotesContext';
import { FormNotes } from './FormNotes';

export function NotesComponent() {
	const { notes, loading, error, deleteNote } = useNotes();

	if (loading) {
		return <div>A Carregar...</div>;
	}

	if (error) {
		return <div>Erro: {error}</div>;
	}


	const handleDeleteNote = async (noteId: number) => {
		try {
			await deleteNote(noteId);
		} catch (err) {
			console.error('Erro ao deletar nota:', err);
		}
	};

	const sortedNotes = [...notes].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

	return (
		<div>
			<div className=' text-gray-500'>Precisa de organizar o histórico da sua viatura?</div>

			<FormNotes />

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{sortedNotes.map(note => (
					<div key={note.id} className='bg-grey-boxCard rounded-3xl p-6'>
						<div className='text-grey-title text-xs flex justify-end'>
							última atualização em {new Date(note.updatedAt).toLocaleDateString()} às {new Date(note.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
						</div>
						<p className='text-grey-title text-sm leading-2'>título</p> {note.title}
						<div className=' break-all leading-5 pt-2'>
							<p className='text-grey-title text-sm leading-2'>conteúdo</p> {note.content}
						</div>
						<p className='text-grey-title text-sm leading-2 pt-2'>data</p> {new Date(note.date).toLocaleDateString()}
						<div className='flex justify-end'>
							<button className='text-xs bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full' onClick={() => handleDeleteNote(note.id)}>
								Deletar
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
