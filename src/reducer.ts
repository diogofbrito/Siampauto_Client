import { FiltersState, FiltersAction } from './contexts/types';

export function filtersReducer(state: FiltersState, action: FiltersAction): FiltersState {
	switch (action.type) {
		case 'SET_BRAND':
			return { ...state, brand: action.payload };
		case 'SET_MODEL':
			return { ...state, model: action.payload };
		case 'SET_KMS':
			return { ...state, kms: action.payload };
		case 'SET_PRICE':
			return { ...state, price: action.payload };
		case 'SET_FUEL':
			return { ...state, fuel: action.payload };
		case 'SET_YEAR':
			return { ...state, year: action.payload };
		case 'SET_TRANSMISSION':
			return { ...state, transmission: action.payload };
		case 'SET_DOORS':
			return { ...state, doors: action.payload };
		case 'SET_COLOR':
			return { ...state, color: action.payload };
		default:
			return state;
	}
}
