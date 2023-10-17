import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import { textColor } from '../../Colors';

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
	width:47%;
    border:1px solid #CCCCCC;
    margin:12px;
	@media screen and (max-width: 720px) {
		width: 100%;
		padding:1rem;
		text-align: center;
	}
`;

export const ImgIcon = styled.img`
	margin-bottom: 1rem;
    width:8rem;
    height:8rem;
`;

export const Subtitle = styled.span`
	color:${textColor};
	font-size:1rem;
	line-height:1.5;
`;

export const KnowMore = styled.span`
    margin-top:15px;
    color:#024EFB;
    font-weight:500;
`;
