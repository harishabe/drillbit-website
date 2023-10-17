import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import { white } from '../../Colors';
import { motion } from 'framer-motion';

export const ServiceLogoItem = styled.div`
    order: 1;    
    padding:30px;
    flex: 0 0 33.3%;
    margin-top:0.4rem;

    @media screen and (max-width: 768px) {
		order: 1;    
        padding:30px;
        flex: 0 0 50%;
	}
`;

export const ServiceLogoTitle = styled(motion.p)`
    text-align:center;
	margin-bottom: 15px;
	font-size: ${({ fontSize }) => (fontSize)};
	line-height: 24px;
	color: ${white};
`;

export const Line = styled.div`
    margin-top:0rem;
`;

export const ImgIcon = styled.img`
    margin:auto;
    width:28px;
    height:28px;
`;

export const ServiceContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;	
    text-align:center;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;


export const ServiceCardInfo = styled(Column)`
	padding:2rem;
	width:33.3%;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
    @media screen and (max-width: 720px) {
		width:50%;
        padding:0rem;
	}
`;

