import React from 'react';
import Content from '../../component/Content/Content';
import UserGuideSection from './UserGuideSection';
import {
    UserGuideLine
} from '../../data/homeData';
import Footer from '../../component/Footer/Footer';

const UserGuide = () => {
    return (
        <>
            <Content
                imgWidth="31rem"
                {...UserGuideLine}
            />
            <UserGuideSection
                {...UserGuideLine}
            />
            <Footer />
        </>
    );
};

export default UserGuide;
