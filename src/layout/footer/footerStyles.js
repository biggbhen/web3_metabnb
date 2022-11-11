import styled from 'styled-components';

export const Container = styled.footer`
	padding: 40px 5%;
	background-color: black;
	.logo {
		border: 1px solid yellow;
		width: clamp(12rem, 20vw, 14.375rem);
		img {
			width: 100%;
			height: 100%;
		}
	}
`;
