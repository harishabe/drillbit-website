import React from 'react';
import Content from '../../component/Content/Content';
import {
    NewsBlogData
} from '../../data/homeData';
import NewsBlogSection from './NewsBlogSection';
import NewsEventSection from './NewsEventSection';
import Footer from '../../component/Footer/Footer';

const NewsBlog = () => {
    return (
        <>
            <Content
                imgWidth="31rem"
                {...NewsBlogData}
            />

            <NewsBlogSection
                {...NewsBlogData}
            />

            <NewsEventSection
                {...NewsBlogData}
            />

            <Footer />
        </>
    );
};

export default NewsBlog;
