import './style.css';
import { NavLink } from 'react-router-dom';
import { LoginBtn } from '../LoginBtn/index';

export function Header() {
	return (
		<div className='navbar'>
			<div className='navbar__item'>
				<NavLink className='radius' to='/'>
					menu
				</NavLink>
				<NavLink className='' to='/'>
					siampauto
				</NavLink>
				<LoginBtn />
			</div>
		</div>
	);
}
