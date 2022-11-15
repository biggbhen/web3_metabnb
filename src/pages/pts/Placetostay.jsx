import React, { useContext } from 'react';
import Categories from '../../components/categories/Categories';
import AppContext from '../../components/context/AppContext';
import Modal from '../../components/modal/Modal';
import Card from '../../components/nft/Card';
import { Container } from './ptsStyles';

const Placetostay = () => {
	const { showModal } = useContext(AppContext);
	return (
		<Container>
			{showModal && <Modal />}
			<Categories />
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

export default Placetostay;
