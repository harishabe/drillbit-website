import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from '../../globalStyles';
import { bannerColor } from './../../Colors';
import {
    AboutContainer,
    AboutCardInfo,
    Title,
    LogoImage,
    SubTitle
} from './AboutUsStyle';

const AboutUsSection = ({
    data
}) => {
    return (
        <>
            <Section
                bgColor={bannerColor}
                padding="120px 0">
                <Container>
                    <AboutContainer>
                        {data.map((item, i) => {
                            return (
                                <AboutCardInfo key={i}>
                                    <LogoImage src={item.icon} />
                                    <Title>
                                        {item.title}
                                    </Title>
                                    <SubTitle>
                                        {item.subTitle}
                                    </SubTitle>
                                </AboutCardInfo>
                            );
                        })}
                    </AboutContainer>
                </Container>
            </Section>
        </>
    );
};


AboutUsSection.propTypes = {
    data: PropTypes.object,
};

export default AboutUsSection;
