import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Column, Row } from '../../globalStyles';

export const ClientHeading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 2.125rem;
    line-height: 1.5rem;
    text-align:center;
	font-weight: 600;
	color: ${({ color }) => (color)};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const ImgIcon = styled.img`
    margin:auto; 
    @media screen and (max-width: 720px) {
        width:90px;
        height:90px;
    }
	&:hover {
		transform: scale(1.4);
		transition: all 0.3s ease-out;
	}
`;

export const ClientSubtitle = styled(motion.p)`
    text-align:center;
	margin-bottom: 15px;
	font-size: ${({ fontSize }) => (fontSize)};
	line-height: 24px;
	color: ${({ color }) => (color)};
`;

export const ClientLogoContainer = styled(Row)`
    flex-wrap: wrap;
    margin: auto;
    max-width: 1280px;
    @media screen and (max-width: 720px) {
        justify-content: center;
    }
`;

export const ClientLogoItem = styled(Column)`
	padding:2rem;
	width:25%;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;
