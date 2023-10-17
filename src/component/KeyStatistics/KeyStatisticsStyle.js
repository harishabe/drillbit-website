import styled from 'styled-components';
import { black, textColor } from '../../Colors';
import { motion } from 'framer-motion';

export const StatisticSection = styled.div`
	padding: 50px 0 160px;
	display: flex;
	flex-direction: column;
`;

export const StatisticWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;


export const StatisticHeading = styled(motion.h2)`
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

export const StatisticSubtitle = styled(motion.p)`
	max-width: 982px;
	margin-bottom: 15px;
	font-size: 1.125rem;
	line-height: 24px;
	color: ${textColor};
`;


export const StatisticsContainer = styled(motion.div)`
	display: flex;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const StatisticsCardInfo = styled.div`
	width: 33.3%;
	text-decoration: none;
	border: 1px solid #C4C4C4;
	border-radius:8px;
	height: 100%;
	display: inline-block;
	flex-direction: column;	
	padding:6rem 2rem 6rem 2rem;
	color: #000;
	margin: auto;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		padding:1rem 1rem 1rem 1rem;
		&:hover {
			transform: none;
		}
	}
`;

export const StatisticsLabel = styled.span`
	color:${black};
	font-weight:bold;
	font-size:2.75rem;
`;

export const StatisticsSecondaryLabel = styled.span`
	color:${black};
	font-weight:bold;
	margin-left:15px;
`;

export const StatisticsSubtitle = styled.span`
	color:${textColor};
	font-size:0.8rem;
`;