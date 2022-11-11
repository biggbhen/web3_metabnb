import styled from 'styled-components';

export const Container = styled.section`
	padding: 40px 5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		width: clamp(12rem, 20vw, 14.375rem);
		img {
			width: 100%;
			height: 100%;
		}
	}
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 40%;
	}
	li {
		font-size: clamp(1rem, 1.5vw, 1.2rem);
	}
	.button {
		border: none;
		padding: 15px 25px;
		background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
		border-radius: 7px;
		color: ${({ theme }) => (theme ? theme.colors.plain : '#fff')};
	}
`;
