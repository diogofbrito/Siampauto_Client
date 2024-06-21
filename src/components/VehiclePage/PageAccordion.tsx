import { Accordion, AccordionItem } from '@nextui-org/react';
import { Vehicle } from '../../types/vehicle';

interface CarAccordionProps {
	vehicle: Vehicle;
	formatEquipmentList: (equipmentList: string[]) => string;
}

export function PageAccordion({ vehicle, formatEquipmentList }: CarAccordionProps) {
	return (
		<div className='mt-8 text-black '>
			<Accordion variant='splitted'>
				<AccordionItem key='1' aria-label='Accordion 1' title='Extras'>
					{vehicle.Obs}
				</AccordionItem>
				<AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
					<ul dangerouslySetInnerHTML={{ __html: formatEquipmentList(vehicle.EquipmentList) }}></ul>
				</AccordionItem>
				<AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'></AccordionItem>
			</Accordion>
		</div>
	);
}