import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const UserGuideContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const UserGuideCardInfo = styled(Column)`
	padding:2rem;
	width:47%;
    border:1px solid #CCCCCC;
    border-radius:5px;
    margin:12px;
	@media screen and (max-width: 720px) {
		width: 50%;
		padding:1rem;
		text-align: center;
	}
`;

export const ImageIcon = styled.div`
    width:5rem;
`;

export const HeaderTitle = styled.div`
    font-size:24px;
    margin-top:20px;
    margin-bottom:15px;
`;

export const SubTitle = styled.div`
    font-size:14px;
    margin-top:10px;
    margin-bottom:15px;
`;

export const FaqTitle = styled.div`
	font-size:1.5rem;
	margin-bottom:25px;
`;

export const List = styled.ul`
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
`;

export const ListItem = styled.li`
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
`;

export const APIUrl = styled.div`
	font-size: 1.123rem;
	font-weight: ${({ fontWeight }) => (fontWeight)};
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
`;

export const APIUrlLink = styled.div`
	font-size: 1.123rem;
	font-weight: ${({ fontWeight }) => (fontWeight)};
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	@media screen and (max-width: 960px) {
		font-size:10px;
	}
`;

export const DividerImgIcon = styled.img`
	width:100%;
`;

export const SubHeaderTitle = styled.div`
	font-size: 1.6rem; 
	font-weight: bold;
	margin-bottom:1rem;
	margin-top:25px;
`;

export const CursorPointer = styled.div`
	cursor:pointer;
`;
