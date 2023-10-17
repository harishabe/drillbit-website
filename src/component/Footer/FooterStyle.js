import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import { black, white } from '../../Colors';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

export const PlagiarismEasy = styled.div`
	border:1px solid ${white};
	padding:3rem;	
	text-align:center;
	border-radius:1rem;
	background:linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);
	color:${white};
	position:relative;
	bottom:8rem;
	@media screen and (max-width: 720px) {
		bottom:2rem;
	}
`;

export const PlagiarismEsayTitle = styled(motion.div)`
	margin-bottom:2rem;
	font-size:2.25rem;
	font-weight:800;
	@media screen and (max-width: 720px) {
		font-size:1rem;
	}
`;

export const Button = styled(motion.button)`
	border-radius: 4px;
	margin-top:2rem;
	background:transparent;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color:${white};
	font-size: 0.9rem;
	font-weight:bold;
	outline: none;
	border: 1px solid ${white};
	cursor: pointer;
	text-transform:uppercase;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
		color: ${white};
	}
`;

export const PlagiarismEsaySubTitle = styled(motion.div)`
	font-size:0.9rem;
	max-width:84%;
	line-height:2;
	margin:auto;
	margin-bottom:20px;
	color:${white}
`;


export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	justify-content: space-between;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;


export const FooterColumn = styled(Column)`
	@media screen and (max-width: 720px) {
		width: 100%;
		text-align: center;
	}
`;

export const FooterLine = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 90px auto 0;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 24px;
`;

export const WebsiteRights = styled.small`
	color: ${black};
	margin-bottom: 16px;
`;

export const FooterLink = styled.div`
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
`;