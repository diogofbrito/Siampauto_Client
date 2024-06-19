import { useAuth } from '../../contexts/AuthContext';
import './style.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

export function Header() {
	const { isLogged, logout } = useAuth();
	return (
		<>
			<Navbar shouldHideOnScroll>
				<NavbarBrand>
					<p className='font-bold text-inherit'>ACME</p>
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
