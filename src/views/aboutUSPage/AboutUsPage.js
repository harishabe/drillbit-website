import React from 'react';
import {
    AboutUsData,
    keyStatistics,
    clients
} from '../../data/homeData';
import Content from '../../component/Content/Content';
import KeyStatistics from '../../component/KeyStatistics/KeyStatistics';
import Clients from '../../component/Clients/Clients';
import Footer from '../../component/Footer/Footer';
import AboutUsSection from './AboutUsSection';

const AboutUsPage = () => {
    return (
        <>
            <Content
                imgWidth="35rem"
                {...AboutUsData}
            />
            <KeyStatistics {...keyStatistics} />
            <AboutUsSection  {...AboutUsData}/>
            <Clients {...clients} />
            <Footer />
        </>
    );
};

export default AboutUsPage;
