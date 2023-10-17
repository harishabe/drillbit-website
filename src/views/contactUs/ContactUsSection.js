import React from 'react';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import { Container, Section } from '../../globalStyles';
import {
    ContactDetails,
    CityAddrs,
    ContactTitle,
    ContactSubTitle,
    ImgIcon,
    ImgIconAdds,
    CountryName,
    AddressTitle,
    ContactRow
} from './ContactUsStyle';
import ContactForm from './ContactForm';

const ContactUsSection = ({
    mailIcon,
    phoneIcon,
    addrsIcon
}) => {
    return (
        <Section padding='100px 0'>
            <Container>
                <Grid container spacing={3}>
                    <Box
                        component={Grid}
                        item
                        xs={12}
                        sm={6}
                        md={6}>
                        <ContactDetails>
                            <ContactTitle>
                                Contact details
                            </ContactTitle>
                            <ContactSubTitle>
                                <ImgIcon src={mailIcon} /> sales@drillbitplagiarism.com
                            </ContactSubTitle>
                            <ContactSubTitle>
                                <ImgIcon src={phoneIcon} /> +91 97382 18506
                                <div style={{ marginTop: '10px' }}></div>
                                <ImgIcon src={phoneIcon} /> +91 80-26794 277
                            </ContactSubTitle>

                            <AddressTitle>
                                Address
                            </AddressTitle>
                            <Container
                                padding="0"
                            >

                                <ContactRow>
                                    <Box
                                        component={Grid}
                                        item
                                        xs={12}
                                        sm={4}
                                        md={4}>
                                        <ImgIconAdds src={addrsIcon} />
                                    </Box>
                                    <Box
                                        component={Grid}
                                        item
                                        xs={12}
                                        sm={8}
                                        md={8}>
                                        <CountryName>
                                            India, Bangalore
                                        </CountryName>
                                        <CityAddrs>
                                            #92/4, RAC Tower,
                                            Bangalore, Karnataka,
                                            India, 560085
                                            <ContactSubTitle>
                                                <ImgIcon src={mailIcon} /> sales@drillbitplagiarism.com
                                            </ContactSubTitle>
                                        </CityAddrs>

                                    </Box>
                                </ContactRow>
                            </Container>
                            <Container
                                padding="0"
                            >

                                <ContactRow>
                                    <Box
                                        component={Grid}
                                        item
                                        xs={12}
                                        sm={4}
                                        md={4}>
                                        <ImgIconAdds src={addrsIcon} />
                                    </Box>
                                    <Box
                                        component={Grid}
                                        item
                                        xs={12}
                                        sm={8}
                                        md={8}>
                                        <CountryName>
                                            India, Noida
                                        </CountryName>
                                        <CityAddrs>
                                            Balani Infotech Pvt. Ltd. (Exclusive distributor)
                                            B-116, Sector-67,
                                            Gautam Buddha Nagar District,
                                            Noida, Uttar Pradesh, 201301
                                            <ContactSubTitle>
                                                <ImgIcon src={mailIcon} /> contactus@balaniinfotech.com
                                            </ContactSubTitle>
                                        </CityAddrs>

                                    </Box>
                                </ContactRow>
                            </Container>
                        </ContactDetails>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        xs={12}
                        sm={6}
                        md={6}>
                        <Card>
                            <CardContent>
                                <ContactTitle>
                                    Lets connect
                                </ContactTitle>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Container>
        </Section >
    );
};


ContactUsSection.propTypes = {
    mailIcon: PropTypes.bool,
    phoneIcon: PropTypes.bool,
    addrsIcon: PropTypes.string,
};

export default ContactUsSection;
