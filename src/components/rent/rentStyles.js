import styled from 'styled-components';
export const Container = styled.section`
	display: flex;
	border: 1px solid red;
	padding: 3% 7%;
	> * {
		width: 40%;
	}
	.rent_a_place {
		width: 60%;
		h2 {
			font-size: clamp(2.5rem, 5vw, 3.5rem);
			margin-bottom: 3rem;
			color: rgba(67, 67, 67, 1);
			span {
				color: rgba(160, 34, 121, 1);
			}
		}
		p {
			font-size: clamp(1.2rem, 2vw, 1.5rem);
			margin-bottom: 2rem;
		}

		form {
			display: flex;
			input {
				width: 65%;
				border: 1px solid black;
				border-right: none;
				outline: none;
				padding: 20px 0;
				font-size: clamp(0.9rem, 1.5vw, 1.1rem);
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}
			button {
				width: 35%;
				border: none;
				background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
				font-size: clamp(0.9rem, 1.5vw, 1.1rem);
				color: #fff;
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}
	}
`;
