import styled from 'styled-components';
import { Grid, Autocomplete } from '@mui/material';

export const Container = styled.div`
	text-align: center; 
    margin: 4rem;
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

export const StyledAutocomplete = styled(Autocomplete)({
    width: 300, 
    marginBottom: 20,
});

export const GridItem = styled(Grid)({
    display: 'flex',
});

export const CenteredGrid = styled(GridItem)({
    justifyContent: 'center',
    alignItems: 'center',
});