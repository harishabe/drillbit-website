import React from 'react';
import {
    PaymentData
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import PaymentSection from './PaymentSection';
import Footer from '../../component/Footer/Footer';

const PaymentPage = () => {
    return (
        <>
            <Content
                imgWidth="36rem"
                {...PaymentData}
            />
            <PaymentSection
                {...PaymentData}
            />
            <Footer />
        </>
    );
};

export default PaymentPage;
