import React from 'react';
import PropTypes from 'prop-types';

import Content from '../../../component/Content/Content';
import Footer from '../../../component/Footer/Footer';
import Clients from '../../../component/Clients/Clients';
import Services from '../../../component/Services/Services';
import Integration from '../../../component/Integration/Integration';
import OrganizationSection from './OrganizationSection';
import OrganizationSubSection from './OrganizationSubSection';

import {
    integration,
    clients,
    services
} from '../../../data/homeData';

const Organization = ({
    data
}) => {
    return (
        <>
            <Content trailRegistration={true} {...data} />
            <OrganizationSection {...data} />
            <Services {...services} />
            <OrganizationSubSection {...data} />
            <Integration {...integration} />
            <Clients {...clients} />
            <Footer />
        </>
    );
};

Organization.propTypes = {
    data: PropTypes.object
};

export default Organization;
