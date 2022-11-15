import React from 'react';
import Card from '../nft/Card';
import { Container } from './metahomeStyles';

const Metahomes = () => {
	return (
		<Container>
			<h2>Inspiration for your next adventure</h2>
			<section className='grid'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</Container>
	);
};

export default Metahomes;
