import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../../component/Footer/Footer';
import { SuccessMessage, ErrorMessage } from './../contactUs/ContactUsStyle';

const RegistrationForm = () => {
    const recaptchaRef = React.createRef();
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone: '',
        college_name: '',
        location: '',
        code: '',
    });

    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [verified, setVerified] = useState(false);

    const onChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = () => {
        setVerified(true);
    };

    const [checked, setChecked] = React.useState(false);

    const handleAgreeChange = (event) => {
        setChecked(event.target.checked);
    };

    const submitButton = async (e) => {
        e.preventDefault();
        if (inputField?.email?.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            await axios.post('https://s1.drillbitplagiarismcheck.com:8087/pro/promo/register', { ...inputField })
                .then(res => {
                    setError(false);
                    setMsg(res?.data?.message);
                    setInputField({
                        name: '',
                        email: '',
                        phone: '',
                        college_name: '',
                        location: '',
                        code: '',
                    });
                    setChecked(false);
                    setVerified(false);
                })
                .catch(error => {
                    setError(true);
                    setErrMsg(error?.response?.data?.message);
                    setChecked(false);
                    setVerified(true);
                });
        } else {
            setError(true);
            setErrMsg('Invalid email address');
        }
    };

    return (
        <>
            {msg ?
                <SuccessMessage>
                    {msg}
                </SuccessMessage> : ''}
            {error ?
                <ErrorMessage>
                    {errMsg}
                </ErrorMessage> : ''}
            <Grid item container>
                <Grid lg={3} md={3}></Grid>
                <Grid md={6} xs={11} sm={12}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '10px 0px' }}>
                        New user registration for free trial access/demo account
                    </div>
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
                                value={inputField.name}
                                name="name"
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
                                value={inputField.phone}
                                name="phone"
                                type="number"
                                id="outlined-basic"
                                label="Contact number"
                                variant="outlined"
                                onChange={onChange}
                            />
                            <TextField
                                fullWidth
                                required
                                value={inputField.college_name}
                                name="college_name"
                                type="text"
                                id="outlined-basic"
                                label="Institution name"
                                variant="outlined"
                                onChange={onChange}
                            />
                            <TextField
                                fullWidth
                                required
                                value={inputField.location}
                                name="location"
                                type="text"
                                id="outlined-basic"
                                label="Location"
                                variant="outlined"
                                onChange={onChange}
                            />
                            <TextField
                                fullWidth
                                required
                                value={inputField.code}
                                name="code"
                                type="text"
                                id="outlined-basic"
                                label="Promo code"
                                variant="outlined"
                                onChange={onChange}
                            />

                            <FormGroup>
                                <FormControlLabel control={<Checkbox style={{ marginLeft: '5px' }}
                                    checked={checked}
                                    onChange={handleAgreeChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />} label="Agreed to terms and conditions mentioned on the website" />
                            </FormGroup>

                            <ReCAPTCHA style={{ margin: '10px 0px 0px 10px' }}
                                ref={recaptchaRef}
                                sitekey="6LcvmnobAAAAAAqRJ8uUViMvWJ_KGoAK8z5jdJ9G"
                                onChange={handleCaptchaChange}
                            />
                            <Button
                                style={{ marginLeft: '10px', marginTop: '10px' }}
                                variant="contained"
                                type="submit"
                                disabled={verified && !checked && Object.entries(inputField).length === 6}
                                onClick={submitButton}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Grid>
                <Grid lg={3} md={3}></Grid>
            </Grid>
            <div style={{ marginTop: '100px' }}>
                <Footer />
            </div>
        </>
    );
};

export default RegistrationForm;
