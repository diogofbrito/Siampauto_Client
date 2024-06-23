export const formatKms = (kms: string | number): string => {
	if (typeof kms === 'string' || typeof kms === 'number') {
		return Number(kms).toLocaleString('pt-BR'); 
	}
	return String(kms); 
};
