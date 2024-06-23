import React, { createContext, useContext, useState, useEffect } from 'react';
import { Note, NoteData } from '../types/note';
import { fetchNotes, fetchCreateNote, fetchDeleteNote } from '../services/fetchNotes';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';


interface NotesContextProps {
	notes: Note[];
	loading: boolean;
	error: string | null;
	createNote: (noteData: NoteData) => Promise<void>;
	deleteNote: (id: number) => Promise<void>;

}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const { isLogged } = useAuth();

	useEffect(() => {
		let isMounted = true;

		const getNotes = async () => {
			try {
				const data = await fetchNotes();
				if (isMounted) {
					setNotes(data);
					setLoading(false);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					setError('Erro ao buscar notas.');
					setLoading(false);
				}
			}
		};

		if (isLogged) {
			getNotes();
		}

		return () => {
			isMounted = false;
		};
	}, [isLogged]);

	const createNote = async (noteData: NoteData): Promise<void> => {
		try {
			await fetchCreateNote(noteData);
			const updatedNotes = await fetchNotes();
			setNotes(updatedNotes);

		} catch (err) {
			setError('Erro ao criar nota.');
		}
	};


	const deleteNote = async (id: number): Promise<void> => {
		try {
			await fetchDeleteNote(id);
			const updatedNotes = notes.filter(note => note.id !== id);
			setNotes(updatedNotes);
			toast.success('Nota deletada com sucesso!');

		} catch (err) {
			setError('Erro ao deletar nota.');
		}
	};

	return <NotesContext.Provider value={{ notes, loading, error, createNote, deleteNote }}>{children}</NotesContext.Provider>;
};

const useNotes = (): NotesContextProps => {
	const context = useContext(NotesContext);
	if (!context) {
		throw new Error('useNotes deve ser usado dentro de um NotesProvider');
	}
	return context;
};

export { NotesProvider, useNotes };
