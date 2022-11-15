import React from 'react';
import Metanfts from '../../components/meta_nft/Metanfts';
import Rent from '../../components/rent/Rent';
import Sponsor from '../../components/sponsors/Sponsor';

const Home = () => {
	return (
		<>
			<Rent />
			<Sponsor />
			<Metanfts />
		</>
	);
};

export default Home;
