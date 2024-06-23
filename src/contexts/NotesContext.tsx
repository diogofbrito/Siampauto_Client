/*  import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchNotes } from '../services/fetchNotes';
import { Note } from '../types/note';

interface NotesContextProps {
	notes: Note[];
	loading: boolean;
	error: string | null;
	fetchNotes: () => void;
	createNote: (title: string, content: string) => void;
	updateNote: (id: string, title: string, content: string) => void;
	deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getNotes = async () => {
			try {
				const data = await fetchNotes();
				setNotes(data);
				setLoading(false);
			} catch (err) {
				setError('Erro ao buscar Notas.');
				setLoading(false);
			}
		};

		getNotes();
	}, []);

	const createNote = async (title: string, content: string) => {
		try {
			const newNote = await createNote(title, content);
			setNotes([...notes, newNote]);
			setError(null);
		} catch (error) {
			setError('Failed to create note');
		}
	};

	const updateNote = async (id: string, title: string, content: string) => {
		try {
			await updateNote(id, title, content);
			const updatedNotes = notes.map(note => {
				if (note.id === id) {
					return { ...note, title, content };
				}
				return note;
			});
			setNotes(updatedNotes);
			setError(null);
		} catch (error) {
			setError('Failed to update note');
		}
	};

	const deleteNote = async (id: string) => {
		try {
			await deleteNote(id);
			const filteredNotes = notes.filter(note => note.id !== id);
			setNotes(filteredNotes);
			setError(null);
		} catch (error) {
			setError('Failed to delete note');
		}
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	return (
		<NotesContext.Provider
			value={{
				notes,
				loading,
				error,
				fetchNotes,
				createNote,
				updateNote,
				deleteNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

const useNotes = (): NotesContextProps => {
	const context = useContext(NotesContext);
	if (!context) {
		throw new Error('useNotes deve ser usado dentro de um NotesProvider');
	}
	return context;
};

export { NotesProvider, useNotes }; 
 */