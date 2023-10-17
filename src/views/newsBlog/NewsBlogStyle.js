import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const NewBlogContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const NewBlogCardInfo = styled(Column)`
	width:31%;
    margin:12px;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;

export const NewsEventContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const NewsEventInfo = styled(Column)`
	width:45%;
    margin:12px;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;

export const Title = styled.div`
	font-size:2rem;
    margin-bottom:10px;
`;

export const ImgIcon = styled.img`
	margin-bottom: 1rem;
`;

export const SubTitle = styled.div`
	font-size:0.8rem;
    line-height:1.5;
`;

export const BlogTitle = styled.div`
    font-size:0.875rem;
    margin-bottom:10px;
    font-weight:bold;
`;

export const TwitterFeedTitle = styled.div`
    font-size:1rem;
    font-weight:700;
    margin-bottom:15px;
`;

export const TwitterSubTitle = styled.div`
    font-size:14px;
    margin-top:15px;
`;

export const DrillBitLogo = styled.img`
    width:3rem;
`;

export const TwitterContent = styled.div`
    font-size:14px;
    line-height:1.5;
`;

export const NewsEventTitle = styled.div`
    font-size:1rem;
    font-weight:bold;
    line-height:1.5;
`;

export const NewsEventContentTitle = styled.div`
    font-size:0.8rem;
    line-height:1.5;
    margin-top:1rem;
`;