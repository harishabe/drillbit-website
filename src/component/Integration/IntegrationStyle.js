import styled from 'styled-components';
import { motion } from 'framer-motion';
import { primary, white } from '../../Colors';
import { Column, Row } from '../../globalStyles';

export const ImgIcon = styled.img`
	margin-bottom: 1rem;
	@media screen and (max-width: 768px) {
	}	
	&:hover {
		transform: scale(1.4);
		transition: all 0.3s ease-out;
		color: ${white};
	}
`;

export const Title = styled(motion.p)`
	margin-bottom: 24px;
	font-size: 1.125rem;
	font-weight:bold;
	text-align:center;
	color: ${primary};
`;


export const IntegrationContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;


export const IntegrationCardInfo = styled(Column)`
	padding:2rem;
	width:33.3%;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;