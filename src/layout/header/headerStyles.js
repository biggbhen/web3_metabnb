import styled from 'styled-components';

export const Container = styled.section`
	padding: 40px 7%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		width: clamp(10rem, 20vw, 14.375rem);
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
		cursor: pointer;
		font-size: clamp(1rem, 1.5vw, 1.2rem);
	}
	.button {
		border: none;
		padding: 15px 25px;
		background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
		border-radius: 7px;
		color: ${({ theme }) => (theme ? theme.colors.plain : '#fff')};
	}
	@media screen and (max-width: 970px) {
		ul {
			width: 45%;
		}
		.button {
			padding: 10px 20px;
		}
	}
`;
