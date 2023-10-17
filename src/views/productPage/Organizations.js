import React from 'react';
import Organization from './Organization/Organization';
import {
    organizationData
} from '../../data/homeData';


const Organizations = () => {
    return (
        <>
            <Organization data={organizationData} />
        </>
    );
};

export default Organizations;
