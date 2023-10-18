import styled from 'styled-components';

export const Container = styled.div`
	text-align: center; 
    margin: 5.5rem;
    @media screen and (max-width: 769px) {
		margin: 1rem;
	}
`;

export const Heading = styled.div`
	text-align: start;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 24px;
`;

export const UnicodeButton = styled.div`
	margin: 20px;
    display: inline-flex;
`;

export const UnicodeButton2 = styled.div`
    margin-left: 12px;
`;

export const ErrorBlock = styled.div`
    color: #ff0000;
`;