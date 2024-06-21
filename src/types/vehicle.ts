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
	CC: number | string;
	HP: number;
	Seats: number;
	Kms: number;
	Obs: string;
	EquipmentList: string [];
	Price: number;
	PhotoList: { Photo: string }[];
}
