import React, { createContext, useReducer,  ReactNode, useContext } from 'react';
import { FiltersState, FiltersAction } from './types.ts';
import { filtersReducer } from '../reducer.ts';

const initialState: FiltersState = {
	brand: '',
	model: '',
	kms: null,
	price: null,
	fuel: '',
	year: null,
	transmission: '',
	doors: null,
	color: '',
};

interface FiltersContextProps {
	state: FiltersState;
	dispatch: React.Dispatch<FiltersAction>;
}

const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);

export function FiltersProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(filtersReducer, initialState);

	return <FiltersContext.Provider value={{ state, dispatch }}>{children}</FiltersContext.Provider>;
}
export const useFilters = (): FiltersContextProps => {
	const context = useContext(FiltersContext);
	if (context === undefined) {
		throw new Error('useFilters must be used within a FiltersProvider');
	}
	return context;
};