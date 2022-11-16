import { Container } from './catgoryStyle';
import setIcon from '../../assets/setting.svg';

const Categories = () => {
	return (
		<Container>
			<ul>
				<li>Restaurant</li>
				<li>Cottage</li>
				<li>Castle</li>
				<li>fantasy</li>
				<li>beach</li>
				<li>carbins</li>
				<li>off-grid</li>
				<li>Farm</li>
				<li className='find'>
					<img className='findIcon' src={setIcon} alt='find' />
					<input type='text' placeholder='Location' />
				</li>
			</ul>
			<ul className='ctg'>
				<li>Restaurant</li>
				<li>Category</li>
				<li className='find'>
					<img className='findIcon' src={setIcon} alt='find' />
					<input type='text' placeholder='Location' />
				</li>
			</ul>
		</Container>
	);
};

export default Categories;
