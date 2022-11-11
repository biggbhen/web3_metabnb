import { Container } from './footerStyles';
import homeIcon from '../../assets/logo/homeIcon_footer.svg';

const Footer = () => {
	return (
		<Container>
			<div>
				<figure className='logo'>
					<img src={homeIcon} alt='homeIcon' />
				</figure>
			</div>
		</Container>
	);
};

export default Footer;
