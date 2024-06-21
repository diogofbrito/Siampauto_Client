export const formatKms = (kms: string | number): string => {
	if (typeof kms === 'string' || typeof kms === 'number') {
		return Number(kms).toLocaleString('pt-BR'); // Formata para "34.890" em português do Brasil
	}
	return String(kms); // Retorna o valor original se não for string ou número
};
