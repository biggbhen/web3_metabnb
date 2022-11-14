import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	// height: 100vh;
	padding: 5% 7%;
	background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
	display: flex;
	> * {
		width: 57%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.info {
		width: 43%;

		h2 {
			font-size: clamp(2.1rem, 5vw, 2.6rem);
			margin-bottom: 2.8rem;
		}
		p {
			font-size: clamp(1.15rem, 2vw, 1.3rem);
			line-height: 35px;
			margin-bottom: 2.8rem;
		}
		button {
			padding: 15px 30px;
			border-radius: 7px;
			border: none;
			font-size: clamp(0.9rem, 1.5vw, 1.1rem);
			color: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
			width: max-content;
		}
	}
	.rightSect {
		align-items center ;
		// border:1px solid blue;
  .threenft {
			// border: 1px solid white;
			height: clamp(25rem, 50vw, 32rem);
			width: 90%;
			img {
				width: 100%;
				height: 100%;
    display: block
			}
		}
	}
`;
