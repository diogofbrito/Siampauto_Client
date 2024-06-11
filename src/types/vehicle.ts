export interface Vehicle {
	ID: number;
	Brand: string;
	Model: string;
	Version: string;
	Year: number;
	Month: number;
	Category: string;
	Transmission: string;
	Fuel: string;
	Doors: number;
	Color: string;
	CC: number;
	Kms: number;
	EquipmentList: string[];
	Price: number;
	PhotoList: { Photo: string }[];
}
