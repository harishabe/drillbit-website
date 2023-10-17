import React from 'react';
import {
    NewsBlogData
} from '../../data/homeData';
import NewsBlogSectionMore from './NewsBlogSectionMore';
import Footer from '../../component/Footer/Footer';

const NewsBlogMore = () => {
    return (
        <>

            <NewsBlogSectionMore
                {...NewsBlogData}
            />

            <Footer />
        </>
    );
};

export default NewsBlogMore;
