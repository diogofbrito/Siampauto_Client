export interface FiltersState {
	brand: string;
	model: string;
	kms: number | null;
	price: number | null;
	fuel: string;
	year: number | null;
	transmission?: string;
	doors?: number | null;
	color?: string;
}

export type FiltersAction =
	| { type: 'SET_BRAND'; payload: string }
	| { type: 'SET_MODEL'; payload: string }
	| { type: 'SET_KMS'; payload: number | null }
	| { type: 'SET_PRICE'; payload: number | null }
	| { type: 'SET_FUEL'; payload: string }
	| { type: 'SET_YEAR'; payload: number | null }
	| { type: 'SET_TRANSMISSION'; payload: string }
	| { type: 'SET_DOORS'; payload: number | null }
	| { type: 'SET_COLOR'; payload: string };
