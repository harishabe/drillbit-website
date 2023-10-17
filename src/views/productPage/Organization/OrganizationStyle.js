import styled from 'styled-components';
import { Column, Row } from '../../../globalStyles';
import { textColor } from '../../../Colors';

export const IntegrationContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const IntegrationCardInfo = styled(Column)`
	padding-top:2rem;
	padding-bottom:2rem;
	margin-right:1rem;
	width:47%;
	@media screen and (max-width: 720px) {
		width: 100%;
		padding:1rem;
		text-align: center;
	}
`;

export const ImgIcon = styled.img`
	margin-bottom: 1rem;
    width:3rem;
    height:auto;
	@media screen and (max-width: 768px) {
	}
`;

export const Subtitle = styled.span`
	color:${textColor};
	font-size:14px;
	line-height:1.5;
	text-align:justify;
`;

export const KnowMore = styled.span`
    margin-top:1px;
	margin-bottom:1rem;
	font-size:1.125rem;
    font-weight:800;
`;

export const OrganizationImgIcon = styled.img`
	width:27rem !important;
	margin-top:5rem;
	margin-left:-1.2rem;
	margin-bottom:30rem;
	@media screen and (max-width: 768px) {
		display: none;
		margin-bottom:0rem;
	}
`;

export const OrganizationSubTitle = styled.div`
	margin-top: 0.175rem;
	font-size:1.125rem;
    font-weight:800;
`;

export const OrganizationSubTitle2 = styled.div`
	margin-top: 0.875rem;
	margin-bottom: 5rem;	
	font-size: 1rem;
`;