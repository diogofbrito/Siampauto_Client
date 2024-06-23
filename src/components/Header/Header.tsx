import { useAuth } from '../../contexts/AuthContext';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { DashboardBar } from './DashboardBar';
import logo from '../../assets/logoSiampauto.png';

export function Header() {
	const { isLogged, logout } = useAuth();

	return (
		<>
			<Navbar shouldHideOnScroll className='bg-grey-default '>
				<NavbarBrand>
					<Link href='/'>
						<img src={logo} alt='Logotipo Siampauto' style={{ width: '70%' }} />
					</Link>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-6 ' justify='center'>
					<NavbarItem>
						<Link href='/Sobre' className='text-white'>
							A empresa
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className='text-white' href='/Stock'>
							O nosso stock
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href='#' className='text-white'>
							Serviços
						</Link>
					</NavbarItem>

					{isLogged && <DashboardBar />}
				</NavbarContent>
				<NavbarContent justify='end'>
					{isLogged ? (
						<Button className='bg-green-link' onClick={logout}>
							Sair
						</Button>
					) : (
						<NavbarItem className='hidden lg:flex '>
							<Link href='/Entrar' className='text-grey-title'>
								Área Reservada
							</Link>
						</NavbarItem>
					)}
				</NavbarContent>
			</Navbar>
		</>
	);
}
