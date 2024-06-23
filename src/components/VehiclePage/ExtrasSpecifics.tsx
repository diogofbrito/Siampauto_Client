import { Vehicle } from '../../types/vehicle';

interface CarAccordionProps {
	vehicle: Vehicle;
	formatEquipmentList: (equipmentList: string[]) => string;
}

export function ExtrasSpecifics({ vehicle, formatEquipmentList }: CarAccordionProps) {
	const divideArray = (arr: string[], size: number) => {
		let result = [];
		for (let i = 0; i < arr.length; i += size) {
			result.push(arr.slice(i, i + size));
		}
		return result;
	};

	const columns = divideArray(vehicle.EquipmentList, Math.ceil(vehicle.EquipmentList.length / 3));

	return (
		<div className='pt-8 text-white'>
			<div className='text-3xl font-bold text-center pb-4'>Mais características</div>

			{vehicle.EquipmentList.length === 0 ? (
				<div className='text-center'>Sem informação</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-grey-default rounded-3xl p-6'>
					{columns.map((column, index) => (
						<ul key={index} className='list-none'>
							{column.map((item, idx) => (
								<li key={idx} dangerouslySetInnerHTML={{ __html: formatEquipmentList([item]) }}></li>
							))}
						</ul>
					))}
				</div>
			)}
		</div>
	);
}
