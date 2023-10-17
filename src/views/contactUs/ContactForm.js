import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { SuccessMessage, ErrorMessage } from './ContactUsStyle';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ContactForm = () => {
    const recaptchaRef = React.createRef();
    const [inputField, setInputField] = useState({
        fullName: '',
        email: '',
        contact: '',
        productType: '',
        message: '',
    });

    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const [verified, setVerified] = useState(false);
    const [readTermCondition, setReadTermCondition] = useState(false);
    
    const onChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };

    const onTagsChange = (e, v) => {
        setInputField({ ...inputField, productType: v });
    };

    const handleCaptchaChange = () => {
        setVerified(!verified);
    };

    const handleTermCondition = (e) => {
        setReadTermCondition(e.target.checked);
    };

    const submitButton = (e) => {
        e.preventDefault();
        axios.post('https://s1.drillbitplagiarismcheck.com:8082/extreme/web/contactUs', { ...inputField })
            .then(res => {
                setError(false);
                setMsg(res.data);
                setInputField({
                    fullName: '',
                    email: '',
                    contact: '',
                    productType: [],
                    message: ''
                });
                setVerified(true);
                setReadTermCondition(true);
            })
            .catch(() => {
                setError(true);
                setInputField({
                    fullName: '',
                    email: '',
                    contact: '',
                    productType: [],
                    message: ''
                });
                setVerified(true);
                setReadTermCondition(true);
            });
    };

    return (
        <>
            {msg ?
                <SuccessMessage>
                    {msg}
                </SuccessMessage> : ''}
            {error ?
                <ErrorMessage>
                    Email id is invalid , Please enter valid email address.
                </ErrorMessage> : ''}
            <form id="contact-form">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        required
                        value={inputField.fullName}
                        name="fullName"
                        label="Your full name"
                        variant="outlined"
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        name="email"
                        value={inputField.email}
                        required
                        type="email"
                        id="outlined-basic"
                        label="Your email address"
                        variant="outlined"
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        required
                        value={inputField.contact}
                        name="contact"
                        type="number"
                        id="outlined-basic"
                        label="Contact number"
                        variant="outlined"
                        onChange={onChange}
                    />

                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={
                            [
                                'Organization',
                                'Institute',
                                'Personal'
                            ]
                        }
                        disableCloseOnSelect
                        getOptionLabel={(option) => option}
                        onChange={(event, value) => onTagsChange(event, value)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                    color="primary"
                                />
                                {option}
                            </li>
                        )}
                        renderInput={(params) => (
                            <TextField {...params}
                                value={inputField.productType} label="Products dedicated to plagiarism" placeholder="Select product type" />
                        )}
                    />

                    <textarea rows="8" cols="50" maxLength="250"
                        name="message"
                        value={inputField.message}
                        onChange={onChange}
                        placeholder="Your message"
                        style={{ width: '100%', marginLeft: '10px', marginTop: '10px' }}>
                    </textarea>

                    <ReCAPTCHA style={{ margin: '10px 0px 0px 10px' }}
                        ref={recaptchaRef}
                        sitekey="6LcvmnobAAAAAAqRJ8uUViMvWJ_KGoAK8z5jdJ9G"
                        onChange={handleCaptchaChange}
                    />

                    <div>
                        <Checkbox
                            onChange={handleTermCondition}
                            checked={readTermCondition}
                            size="small"
                            color="primary"
                        /> <a href='https://drillbitplagiarism.com/termsCondition' target='_blank' rel="noreferrer">Read terms and conditions</a>
                    </div>                    
                                
                    <Button
                        style={{ marginLeft: '10px', marginTop: '10px' }}
                        variant="contained"
                        disabled={(!verified && !readTermCondition)}
                        onClick={submitButton}
                    >Submit</Button>
                </Box>
            </form>
        </>
    );
};

export default ContactForm;
