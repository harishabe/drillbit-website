import React from 'react';
import Organization from './Organization/Organization';
import {
    personalData
} from '../../data/homeData';


const Personal = () => {
    return (
        <>
            <Organization data={personalData} />
        </>
    );
};

export default Personal;
