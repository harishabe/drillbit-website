import React from 'react';
import Organization from './Organization/Organization';
import {
    instituteData
} from '../../data/homeData';

const Institute = () => {
    return (
        <>
            <Organization data={instituteData} />
        </>
    );
};

export default Institute;
