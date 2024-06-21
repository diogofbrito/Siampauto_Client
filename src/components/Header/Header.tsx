import { useAuth } from '../../contexts/AuthContext';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { DashboardBar } from './DashboardBar';

export function Header() {
	const { isLogged, logout } = useAuth();
	return (
		<>
			<Navbar shouldHideOnScroll>
				<NavbarBrand>
					<Link color='foreground' href='/'>
						<img src='../../assets/logoSiampauto.png' alt='Logo' />
					</Link>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-6' justify='center'>
					<NavbarItem>
						<Link color='foreground' href='/Stock'>
							As nossas viaturas
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href='#' aria-current='page'>
							Serviços
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color='foreground' href='#'>
							Contactos
						</Link>
					</NavbarItem>
					{isLogged && <DashboardBar />}
				</NavbarContent>
				<NavbarContent justify='end'>
					{isLogged ? (
						<Button color='primary' onClick={logout}>
							Sair
						</Button>
					) : (
						<NavbarItem className='hidden lg:flex'>
							<Link href='/Entrar'>Área Reservada</Link>
						</NavbarItem>
					)}
				</NavbarContent>
			</Navbar>
		</>
	);
}
