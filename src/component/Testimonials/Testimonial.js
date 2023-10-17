import React from 'react';
import PropTypes from 'prop-types';
import {
    TestimonialRow, Left, Right, ImgIcon, Description, Company, Designation
} from './TestimonialStyle';

const Testimonial = (props) => {
    const {
        img,
        description,
        name,
        orgName,
        qualification,
        designation
    } = props;

    return (
        <>
            <TestimonialRow>
                <Left width="30%">
                    <ImgIcon src={img} />
                </Left>
                <Right width="70%">
                    <Description>
                        {description}
                    </Description>
                    <Company>
                        {name}
                        <sub style={{ fontSize: '12px' }}>{qualification}</sub>
                    </Company>
                    <Designation>
                        {designation}
                    </Designation>
                    <Designation>
                        {orgName}
                    </Designation>
                </Right>
            </TestimonialRow>
        </>
    );
};

Testimonial.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    fontSize: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    qualification: PropTypes.string,
    orgName: PropTypes.string,
    designation: PropTypes.string,
};

export default Testimonial;