import React from 'react';
import {
    CustomerHepData
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './../../component/Footer/Footer';

const CustomerHelp = () => {
    return (
        <>
            <Content
                {...CustomerHepData}
            />
            <PrivacyPolicy
                {...CustomerHepData}
            />
            <Footer />
        </>
    );
};

export default CustomerHelp;
