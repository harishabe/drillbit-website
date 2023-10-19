import React, { useState } from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { Button } from '../../globalStyles';
import { 
    Container, 
    Heading,
    UnicodeButton,
    UnicodeButton2,
    ErrorBlock,
    StyledAutocomplete,
    GridItem,
    CenteredGrid
} from './UnicodeStyle';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import Footer from '../../component/Footer/Footer';

const UnicodeLanguage = [
    { label: 'Kannada', id: 'kannada' },
    { label: 'Hindi', id: 'hindi' },
    { label: 'Bengali', id: 'bengali' },
];

const UnicodeConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(false);
    const [lang, setLang] = useState();

    const fetchData = async (url, method, data, setOutput) => {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            setOutput(result);
            setError(false);
        } catch (error) {
            console.log('Error:', error);
            setError(true);
            setOutput('');
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
        setError(false);
    };

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        await fetchData('https://uat.drillbitplagiarismcheck.com:8083/files/unicode', 'POST', data.replace(/[\r\n]+/g, ''), setOutput);
    };

    return (
        <>
            <Container>
                <StyledAutocomplete
                    disablePortal
                    options={ UnicodeLanguage }
                    disableClearable
                    onChange={ (e, data) => setLang(data) }
                    renderInput={ (params) => <TextField { ...params } label="Select Language"/> }
                />
                <Box component="form" onSubmit={ (e) => handleSubmit(e, e.target[0].value) }>
                    <Heading>
                        { lang?.label } Unicode converter
                    </Heading>
                    <Grid container spacing={ 2 } >
                        <GridItem item xs={ 12 }>
                            <Grid item xs={ 5.7 }>
                                <TextField
                                    fullWidth
                                    multiline={ true }
                                    rows={ 9 }
                                    required={ true }
                                    placeholder="Type or paste text here..."
                                    onInput={ handleChange }
                                    value={ input }
                                />
                            </Grid>
                            <CenteredGrid item xs={ 0.5 }>
                                <MultipleStopIcon />
                            </CenteredGrid>
                            <Grid item xs={ 5.7 }>
                                <TextField
                                    fullWidth
                                    multiline={ true }
                                    rows={ 9 }
                                    placeholder='Output text'
                                    value={ output }
                                />
                            </Grid>
                        </GridItem>
                    </Grid>
                    { error  && <ErrorBlock> Something went wrong , Please try again </ErrorBlock>}
                    <UnicodeButton>
                        <Button type="submit" variant="contained" >
                            Convert to Unicode
                        </Button> 
                        <UnicodeButton2/>
                        { (output || error) && 
                            <Button onClick={handleClear}>
                                Clear all
                            </Button> 
                        }
                    </UnicodeButton>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default UnicodeConverter;