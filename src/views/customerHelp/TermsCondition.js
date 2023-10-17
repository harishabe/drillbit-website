import React from 'react';
import {
    TermsConditionData
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import CustomerSection from './CustomerSection';
import Footer from './../../component/Footer/Footer';

const TermsCondition = () => {
    return (
        <>
            <Content
                imgWidth="30rem"
                {...TermsConditionData}
            />
            <CustomerSection
                {...TermsConditionData}
            />
            <Footer />
        </>
    );
};

export default TermsCondition;
