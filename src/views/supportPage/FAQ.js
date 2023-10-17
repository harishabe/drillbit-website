import React from 'react';
import {
    FAQData
} from '../../data/homeData';
import FAQSection from './FAQSection';
import Content from '../../component/Content/Content';
import Footer from '../../component/Footer/Footer';

const FAQ = () => {
    return (
        <>
            <Content
                imgWidth="38rem"
                {...FAQData}
            />
            <FAQSection
                {...FAQData}
            />
            <Footer />
        </>
    );
};

export default FAQ;
