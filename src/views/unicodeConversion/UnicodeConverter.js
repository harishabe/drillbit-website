import React, { useState, useEffect } from 'react';
import { TextField, Grid, Box, Skeleton, CircularProgress } from '@mui/material';
import { Button } from '../../globalStyles';
import { 
    Container, 
    Heading,
    UnicodeButton,
    UnicodeButton2,
    UnicodeButton3,
    ErrorBlock,
    StyledAutocomplete,
    GridItem,
    CenteredGrid,
    LoaderButton,
    UnicodeSkeleton
} from './UnicodeStyle';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import { UnicodeData } from '../../data/homeData';
import Footer from '../../component/Footer/Footer';

const { 
    title,
    language, 
    fonts, 
    inputText, 
    outputText, 
    loading, 
    errorMessage, 
    convertToUnicode, 
    clearAll, 
    download,
    unicodeLanguage
} = UnicodeData;

const UnicodeConverter = () => {
    const [fontList, setFontList] = useState();
    const [font, setFont] = useState();
    const [lang, setLang] = useState();
    const [isFontLoading, setIsFontLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(false);
    
    const generateUniqueId = () => {
        const timestamp = Date.now().toString(36); // Convert timestamp to base36
        const randomPart = Math.random().toString(36).substr(2, 5); // Take a substring of random part

        return timestamp + randomPart;
    };

    const downloadCsv = (data) => {
        const txtContent = `${data}`;
        const blob = new Blob([txtContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${lang?.label} Unicode.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const fetchData = async (url, method, data = {}, onSuccess, onError) => {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            if (method !== 'GET') {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);
            const result = await response.json();

            if (onSuccess) {
                onSuccess(result);
            }
        } catch (error) {
            onError(error);
        }
    };

    useEffect(() => {
        setIsFontLoading(true);
        if (lang?.label !== undefined) {
            fetchData('https://uat.drillbitplagiarismcheck.com:8089/AsciiToUnicode/fonts', 'POST', { 'language': lang?.label },
                (res) => {
                    setFontList(res?.fonts);
                    setError(false);
                    setIsFontLoading(false);
                },
                () => {
                    setError(true);
                    setIsFontLoading(false);
                });
        } else {
            setFontList();
        }
    }, [lang]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        setIsLoading(true);
        
        let requestData = {
            'language': data, 
            'fonts': font, 
            'ascii': input.replace(/[\r\n]+/g, ''),
            'id': generateUniqueId()
        };

        await fetchData('https://uat.drillbitplagiarismcheck.com:8089/AsciiToUnicode/Ascii-Unicode', 'POST', requestData,
            () => {
                let eventSource = new EventSource(`https://uat.drillbitplagiarismcheck.com:8089/AsciiToUnicode/sse/${requestData.id}`);

                eventSource.onmessage = (event) => {
                    setOutput(event.data);
                    setError(false);
                    setIsLoading(false);
                    eventSource.close();
                };

                eventSource.onerror = (error) => {
                    setOutput(error);
                    setError(true);
                    setIsLoading(false);
                };

            },
            (error) => {
                setOutput(error);
                setError(true);
                setIsLoading(false);
            }
        );
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
        setError(false);
    };

    return (
        <>
            <Container>
                <Box component="form" onSubmit={ (e) => handleSubmit(e, e.target[0].value) }>
                    <GridItem>
                        <StyledAutocomplete
                            disablePortal
                            options={ unicodeLanguage }
                            onChange={ (e, data) => setLang(data) }
                            renderInput={ 
                                (params) => 
                                    <TextField
                                        label={ language } 
                                        required
                                        { ...params } 
                                    /> 
                            }
                        />
                        
                        {
                            fontList?.length > 0 ?
                                <>
                                    { isFontLoading ?
                                        <UnicodeSkeleton width={ 310 } height={ 94 } />
                                        :
                                        <StyledAutocomplete
                                            disablePortal
                                            options={ fontList }
                                            disableClearable
                                            onChange={ (e, data) => setFont(data) }
                                            renderInput={
                                                (params) =>
                                                    <TextField
                                                        label={ fonts }
                                                        required
                                                        { ...params }
                                                    />
                                            }
                                        />
                                    }
                                </>
                                : lang?.label !== undefined && <Skeleton width={ 320 } height={ 60 } />
                        }

                    </GridItem>
                    <Heading>
                        { lang?.label } { title }
                    </Heading>
                    <Grid container spacing={ 2 } >
                        <GridItem item xs={ 12 }>
                            <Grid item xs={ 5.7 }>
                                <TextField
                                    fullWidth
                                    multiline={ true }
                                    rows={ 9 }
                                    required={ true }
                                    placeholder={ inputText }
                                    onInput={ handleChange }
                                    value={ input }
                                />
                            </Grid>
                            <CenteredGrid item xs={ 0.5 }>
                                <MultipleStopIcon />
                            </CenteredGrid>
                            <Grid item xs={ 5.7 }>
                                {
                                    isLoading ? 
                                        <LoaderButton>
                                            <CenteredGrid>
                                                <CircularProgress size={55}/> 
                                            </CenteredGrid>
                                            <CenteredGrid>
                                                { loading }
                                            </CenteredGrid>
                                        </LoaderButton>
                                        :
                                        <TextField
                                            fullWidth
                                            multiline={ true }
                                            rows={ 9 }
                                            placeholder={ outputText }
                                            value={ output }
                                        />
                                }
                            </Grid>
                        </GridItem>
                    </Grid>
                    { error && <ErrorBlock> { errorMessage } </ErrorBlock>}
                    <UnicodeButton>
                        { isLoading ?
                            <UnicodeSkeleton width={ 200 } height={ 75 } />
                            :
                            <>
                                <Button type="submit" variant="contained">
                                    { convertToUnicode }
                                </Button> 
                                <UnicodeButton2/>
                                { (output || error) && 
                                <>
                                    <Button onClick={handleClear}>
                                        { clearAll }
                                    </Button> 
                                    <UnicodeButton3 />
                                    <Button onClick={ () => downloadCsv(output) }>
                                        { download }
                                    </Button> 
                                </>
                                }
                            </>
                        }
                    </UnicodeButton>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default UnicodeConverter;