import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const PaymentContainer = styled(Row)`
	flex-wrap: wrap;
	margin-top:2rem;
	margin-bottom:2rem;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const PaymentCardInfo = styled(Column)`
	padding:2rem;
	width:33.3333%;
    @media screen and (max-width: 720px) {
		width:50%;
        padding:0rem;
	}
`;


export const Title = styled.div`
	font-size:2rem;
`;

export const Circle = styled.div`
	width: 25px;
	text-align: center;
	height: 25px;
	border-radius: 50%;
	color: #fff;
	padding-top: 3px;
	background-image:linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);	
`;

export const SubTitle = styled.div`
	margin-top:1rem;
	font-size:13px;
	line-height:1.5;
`;

export const PaymentPriceContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;


export const PaymentPriceCardInfo = styled(Column)`
	width:48%;
	margin-left:12px;
	border:1px solid gray;
	border-radius:10px;
	padding:2rem;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;

export const Price = styled.div`
	font-size:2rem;
	font-weight:bold;
	margin-top:2rem;
	margin-bottom:2rem;
`;

export const PayNow = styled.a`
	text-decoration:none;	
	width: 22%;
	color:#fff;
`;

export const SubTitlePayment = styled.div`
	margin-top:1rem;
	margin-bottom:3rem;
	font-size:1rem;
	line-height:1.5;
`;
