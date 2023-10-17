import React from 'react';
import Content from '../../component/Content/Content';
import Footer from '../../component/Footer/Footer';
import {
    integrationPage
} from '../../data/homeData';
import LMSIntegration from './LMSIntegration';

const IntegrationPage = () => {
    return (
        <>
            <Content {...integrationPage} />
            <LMSIntegration {...integrationPage} />
            <Footer />
        </>
    );
};

export default IntegrationPage;
