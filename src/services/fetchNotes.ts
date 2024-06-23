import { Note, NoteData } from '../types/note';
import { api } from './api';

export async function fetchNotes(): Promise<Note[]> {
    const response = await api.get<Note[]>('/notes');
    return response.data;
}

export async function fetchCreateNote(noteData: NoteData): Promise<Note> {
    const response = await api.post<Note>('/notes', noteData);
    return response.data;
}

export async function fetchDeleteNote(id: number): Promise<void> {
    await api.delete(`/notes/${id}`);
}

