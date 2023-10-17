import React from 'react';
import OpenAPISection from './OpenAPISection';
import {
    openApi
} from '../../data/homeData';

const OpenAPI = () => {
    return (
        <OpenAPISection {...openApi} />
    );
};

export default OpenAPI;
