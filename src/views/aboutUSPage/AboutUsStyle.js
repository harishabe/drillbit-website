import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import { white } from './../../Colors';

export const AboutContainer = styled(Row)`
	flex-wrap: wrap;
	margin: auto;	
    color:${white}
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const AboutCardInfo = styled(Column)`
	padding:2rem;
	width:50%;
    color:${white};
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
    @media screen and (max-width: 720px) {
		width:50%;
        padding:0rem;
	}
`;

export const Title = styled.div`
    color:${white};
`;

export const LogoImage = styled.img`
    width:2rem;
    margin-bottom:1.5rem;
`;

export const SubTitle = styled.div`
    font-size:0.8rem;
    margin-top:1.5rem;
    color:${white};
    line-height:1.6;
`;