import React from 'react';
import Content from '../component/Content/Content';
import Integration from '../component/Integration/Integration';
import KeyStatistics from '../component/KeyStatistics/KeyStatistics';
import Services from '../component/Services/Services';
import Clients from '../component/Clients/Clients';
import Certifications from '../component/Certifications/Certifications';
import Testimonials from '../component/Testimonials/Testimonials';
import Footer from '../component/Footer/Footer';
import {
    heroOne,
    products,
    integration,
    keyStatistics,
    clients,
    services,
    testimonialData,
    certificate,
    AICTEData
} from '../data/homeData';

function HomePage() {
    return (
        <>
            <Content {...heroOne} />
            <Content {...AICTEData} />
            <Content {...products} />
            <Integration {...integration} />
            <KeyStatistics {...keyStatistics} />            
            <Certifications {...certificate} />
            <Services {...services} />
            <Testimonials {...testimonialData} />
            <Clients {...clients} />
            <Footer />
        </>
    );
}

export default HomePage;
