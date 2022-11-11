import { Container } from './headerStyles';
import homeIcon from '../../assets/logo/homeIcon.svg';
const Header = () => {
	return (
		<Container>
			<figure className='logo'>
				<img src={homeIcon} alt='home_icon' />
			</figure>
			<ul>
				<li>Home</li>
				<li>Place to stay</li>
				<li>NFTs</li>
				<li>Community</li>
			</ul>
			<button className='button'>connect wallet</button>
		</Container>
	);
};

export default Header;
