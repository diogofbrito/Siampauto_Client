export interface Note {
	id: number;
	title: string;
	content: string;
	date: Date;
	updatedAt: Date;
}

export interface NoteData {
	title: string;
	content: string;
	date: Date;
	updatedAt: Date;
}
