export function capitalizeFirstLetter(name: string): string {
	return name.replace(/\b\w/g, char => char.toUpperCase());
}
