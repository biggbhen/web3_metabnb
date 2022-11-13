import { Container } from './rentStyles';

const Rent = () => {
	return (
		<Container>
			<div className='rent_a_place'>
				<h2>
					Rent a <span>Place</span> away from <span>Home</span> in the{' '}
					<span>Metaverse</span>
				</h2>
				<p>
					we provide you access to luxury and affordable houses in the
					metaverse, get a chance to turn your imagination to reality at your
					comfort zone
				</p>
				<form>
					<input type='text' />
					<button>search</button>
				</form>
			</div>
			<div></div>
		</Container>
	);
};

export default Rent;
