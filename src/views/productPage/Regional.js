import React from 'react';
import Organization from './Organization/Organization';
import {
    RegionalData
} from '../../data/homeData';


const Regional = () => {
    return (
        <>
            <Organization data={RegionalData} />
        </>
    );
};

export default Regional;
