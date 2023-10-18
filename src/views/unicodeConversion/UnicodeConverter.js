import React, { useState } from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { Button } from '../../globalStyles';
import { 
    Container, 
    Heading,
    UnicodeButton,
    UnicodeButton2,
} from './UnicodeStyle';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import Footer from '../../component/Footer/Footer';

const UnicodeConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

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
        } catch (error) {
            console.log('Error:', error);
            alert('Something went error');
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
    };

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        await fetchData('https://uat.drillbitplagiarismcheck.com:8083/files/unicode', 'POST', data.replace(/[\r\n]+/g, ''), setOutput);
    };

    return (
        <>
            <Container>
                <Box component="form" onSubmit={ (e) => handleSubmit(e, e.target[0].value) }>
                    <Heading>
                        Unicode converter
                    </Heading>
                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } display={'flex'}>
                            <Grid item xs={ 5.7 }>
                                <TextField
                                    fullWidth
                                    multiline={ true }
                                    rows={ 9 }
                                    required={ true }
                                    placeholder="Type or Paste Text here..."
                                    onInput={ handleChange }
                                    value={ input }
                                />
                            </Grid>
                            <Grid item xs={ 0.5 } sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                                <MultipleStopIcon />
                            </Grid>
                            <Grid item xs={ 5.7 }>
                                <TextField
                                    fullWidth
                                    multiline={ true }
                                    rows={ 9 }
                                    placeholder='Output Text'
                                    value={ output }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <UnicodeButton>
                        <Button type="submit" variant="contained" >
                            Convert to Unicode
                        </Button> 
                        <UnicodeButton2/>
                        { output  && 
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