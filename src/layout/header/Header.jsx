import { Container } from './headerStyles';
import homeIcon from '../../assets/logo/homeIcon.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../components/context/AppContext';
const Header = () => {
	const { setClick, showNav, navClick } = useContext(AppContext);

	return (
		<Container>
			{showNav ? (
				<FaTimes size={'30px'} className='ham' onClick={() => navClick()} />
			) : (
				<FaBars size={'30px'} className='ham' onClick={() => navClick()} />
			)}

			{showNav && (
				<div className='menu'>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/placetostay'>place to stay</NavLink>
						</li>
						<li>NFTs</li>
						<li>Community</li>
					</ul>
					<button className='ham_button' onClick={() => setClick()}>
						connect wallet
					</button>
				</div>
			)}
			<NavLink to={'/'}>
				<figure className='logo'>
					<img src={homeIcon} alt='home_icon' />
				</figure>
			</NavLink>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/placetostay'>place to stay</NavLink>
				</li>
				<li>NFTs</li>
				<li>Community</li>
			</ul>
			<button className='button' onClick={() => setClick()}>
				connect wallet
			</button>
		</Container>
	);
};

export default Header;
