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
	CC: string;
	HP: string;
	Seats: number;
	Kms: string;
	WarrantyMonths: number;
	Obs: string;
	EquipmentList: string[];
	Price: string;
	co2: number;
	PhotoList: { Photo: string }[];
}
