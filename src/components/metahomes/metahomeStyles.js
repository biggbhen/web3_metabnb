import styled from 'styled-components';

export const Container = styled.section`
	padding: 40px 7%;
	text-align: center;
	h2 {
		font-size: clamp(1.5rem, 4vw, 2.8rem);
	}
	@media screen and (max-width: 815px) {
		padding: 40px 3%;
	}
`;
