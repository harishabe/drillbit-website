import React from 'react';
import Organization from './Organization/Organization';
import {
    AIDetectionData
} from '../../data/homeData';


const AIDetection = () => {
    return (
        <>
            <Organization data={AIDetectionData} />
        </>
    );
};

export default AIDetection;
