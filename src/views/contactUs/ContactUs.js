import React from 'react';
import {
    ContactUsData
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import ContactUsSection from './ContactUsSection';
import Footer from '../../component/Footer/Footer';

const ContactUs = () => {
    return (
        <>
            <Content
                imgWidth="30rem"
                {...ContactUsData}
            />
            <ContactUsSection
                {...ContactUsData}
            />
            <Footer />
        </>
    );
};

export default ContactUs;
