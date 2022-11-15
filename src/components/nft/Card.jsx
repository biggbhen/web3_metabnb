import { Container } from './cardStyles';
import starIcon from '../../assets/starIcon.svg';
import A from '../../assets/nfts/card1.png';

const Card = () => {
	return (
		<Container>
			<div className='manynfts'>
				<div className='nfts'>
					<img src={A} alt='nft1' id='firstnfts' />
				</div>

				<div className='contents'>
					<div className='texts'>
						<p className='desertking'>Desert king</p>
						<p className='km'>2345km away</p>
						<p className='iconstar'>
							<img src={starIcon} alt='iconstar' id='iconstars' />
							<img src={starIcon} alt='iconstar' id='iconstars' />
							<img src={starIcon} alt='iconstar' id='iconstars' />
							<img src={starIcon} alt='iconstar' id='iconstars' />
							<img src={starIcon} alt='iconstar' id='iconstars' />
						</p>
					</div>

					<div className='mbt'>
						<h3> 1MBT per night </h3>
						<p className='weeks'>available for 2weeks stay</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Card;
