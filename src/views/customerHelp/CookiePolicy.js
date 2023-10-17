import React from 'react';
import {
    CookiePolicyData
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './../../component/Footer/Footer';

const CookiePolicy = () => {
    return (
        <>
            <Content
                {...CookiePolicyData}
            />
            <PrivacyPolicy
                {...CookiePolicyData}
            />
            <Footer />
        </>
    );
};

export default CookiePolicy;
