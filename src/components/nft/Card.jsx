import { Container } from './cardStyles';
import starIcon from '../../assets/starIcon.svg';
import A from '../../assets/nfts/card1.png';

const Card = () => {
	return (
		<Container>
			<figure>
				<img src={A} alt='nft' />
			</figure>

			<section className='info'>
				<div>
					<p>Desert king</p>
					<p> 1MBT per night </p>
				</div>

				<div>
					<p>2345km away</p>
					<p className='weeks'>available for 2weeks stay</p>
				</div>

				<div>
					<div className='iconstar'>
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Card;
