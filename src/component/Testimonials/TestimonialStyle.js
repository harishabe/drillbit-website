import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialRow = styled.div`
	display: flex;
    margin-top:2rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`;

export const Left = styled(motion.div)`
    width:${({ width }) => width};
`;

export const Right = styled(motion.div)`
    width:${({ width }) => width};
`;

export const ImgIcon = styled.img`
	@media screen and (max-width: 768px) {
		width:4rem;
	}
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: ${({ fontSize }) => fontSize};
	line-height: 1.1;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 2rem;
	}
`;

export const Description = styled.div`
	font-size:1rem;
	line-height:1.5;
	text-align:justify;
`;

export const Company = styled.div`
	font-size:1.5rem;
	margin-top:4rem;
	margin-top:1rem;
	font-weight:bold;
`;

export const Designation = styled.div`
	font-size:1rem;
	margin-top:10px;
`;

export const NextPrev = styled.div`
	text-align:right;
	position:relative;
	top:5rem;
	right:5rem;
`;