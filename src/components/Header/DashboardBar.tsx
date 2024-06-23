import { NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Link } from '@nextui-org/react';
import { ChevronDown } from 'lucide-react';

export function DashboardBar() {
	return (
		<NavbarItem>
			<Dropdown>
				<NavbarItem>
					<DropdownTrigger>
						<Button disableRipple className='p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-md'>
							A minha conta <ChevronDown />
						</Button>
					</DropdownTrigger>
				</NavbarItem>
				<DropdownMenu
					aria-label='Dashboard'
					className='w-[340px] '
					itemClasses={{
						base: 'gap-4',
					}}
				>
					<DropdownItem key='home' description='Página inicial'>
						<Link color='foreground' href='/Welcome'>
							Dashboard
						</Link>
					</DropdownItem>
					<DropdownItem key='perfil' description='Veja o seu perfil e altere as suas configurações.'>
						<Link color='foreground' href='/Profile'>
							Dados do utilizador
						</Link>
					</DropdownItem>
					<DropdownItem key='notas' description='Dados de viaturas, inspeções, serviços e mais.'>
						<Link color='foreground' href='/'>
							Dados do veículo
						</Link>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</NavbarItem>
	);
}
