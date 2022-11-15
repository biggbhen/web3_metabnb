import React from 'react';
import Metahomes from '../../components/metahomes/Metahomes';
import Metanfts from '../../components/meta_nft/Metanfts';
import Rent from '../../components/rent/Rent';
import Sponsor from '../../components/sponsors/Sponsor';

const Home = () => {
	return (
		<>
			<Rent />
			<Sponsor />
			<Metahomes />
			<Metanfts />
		</>
	);
};

export default Home;
