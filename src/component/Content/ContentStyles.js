import styled from 'styled-components';
import { Row } from '../../globalStyles';
import { black, textColor, white } from '../../Colors';
import { motion } from 'framer-motion';

export const ContentRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const SmallColumn = styled(ContentColumn)`
	width: 100%;
	max-width: ${({ bigImage }) => (bigImage ? '40%' : '50%')};
`;

export const BigColumn = styled(ContentColumn)`
	width: 100%;
	max-width: ${({ bigImage }) => (bigImage ? '60%' : '50%')};
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: ${({ fontSize }) => fontSize};
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? black : black)};

	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 2rem;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: ${({ width }) => (width ? width : '440px')};
	margin-bottom: 35px;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.125rem')};
	line-height: 24px;
	color: ${textColor};
`;

export const ContentIcon = styled.img`
	margin-bottom: 1rem;
	margin-top:${({ mt }) => mt};
	width: ${({ imgWidth }) => (imgWidth)};
	@media screen and (max-width: 768px) {
		display: none;
	}
`;



export const ProductsCard = styled.div`
	background:linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);
	padding:1rem;
	color:#fff;
	border-radius:5px;
`;


export const ProductRow = styled(Row)`
	display: flex;
	margin-top:2rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	text-align:center;
`;

export const ProductColumn = styled.div`
    width:${({ width }) => width};
	@media screen and (max-width: 768px) {
		width:34%;
	}
`;

export const ProductTitle = styled.div`
    font-size:1.2rem;
	margin-bottom:1rem;
	text-align:center;
	@media screen and (max-width: 768px) {
		font-size:0.8rem;
	}
`;

export const LineIcon = styled.img`
	margin: auto;
	display:block;
	text-align:center;
	&:hover {
		transform: scale(1.4);
		transition: all 0.3s ease-out;
		color: ${white};
	}
`;

export const Line = styled.div`
	border:2px solid #F9D251;
	width:20%;
	margin:auto;
	margin-bottom:10px;
`;

export const ProductIcon = styled.img`
	margin-bottom: 8rem;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const APIHeader = styled.div`
	font-size:18px;
	font-weight:bold;
	line-height:50px;
	font-weight: bold;
`;

export const APISubHeader = styled.div`
	font-size:16px;
	font-weight:bold;
	line-height:50px;
	font-weight: bold;
`;

export const APISection = styled.div`
	border: 1px solid #dfe3f2;
	border-radius: 8px;
	padding: 25px;
	background: #f3f5fe;
	color: #808394;
	font-weight: bold;
	margin-top:15px;
`;