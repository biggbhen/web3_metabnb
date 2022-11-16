import { Container } from './catgoryStyle';

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
				<li>
					<input type='text' placeholder='Location' />
				</li>
			</ul>
			<ul className='ctg'>
				<li>Restaurant</li>
				<li>Category</li>
				<li>
					<input type='text' placeholder='Location' />
				</li>
			</ul>
		</Container>
	);
};

export default Categories;
