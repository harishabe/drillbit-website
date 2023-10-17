import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { black, white } from '../../Colors';


export const Topbar = styled.nav`
	background: ${white};
	color:${black}
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	z-index: 999;
	transition: background-color 0.3s ease-in;
`;

export const TopbarContainer = styled(Container)`
    display:flex;
	${Container}
`;

export const Language = styled.div`
	margin-left:auto;	
	margin-bottom:5px;
`;

export const EmailId = styled.div`
	color:${black};
    margin-top:5px;
    font-size:0.9rem;
	margin-left:1%;
	@media screen and (max-width: 768px) {
		font-size:10px;
	}
`;