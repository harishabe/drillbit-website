import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Section, MainTitle } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import { white } from './../../../Colors';
import {
    IntegrationContainer,
    IntegrationCardInfo,
    ImgIcon,
    Subtitle,
    KnowMore
} from './OrganizationStyle.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const OrganizationSection = (props) => {
    const {
        inverse,
        showTitle,
        organizationTitle,
        organizationList
    } = props;
    const { t } = useTranslation();
    const initial = { opacity: 0, y: 30 };
    const animation = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });

            return;
        }

        animation.start({
            opacity: 0,
            y: 30,
            transition: {
                duration: 0.2,
            },
        });
    }, [inView, animation]);

    return (
        <>
            <Section
                bgColor={white}
                ref={ref}
                padding={showTitle ? '50px 0' : '30px 0'}>
                <Container>
                    <MainTitle
                        maxWidth="680px"
                        fontSize="2.25rem"
                        initial={initial}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}
                    >
                        {t(`${organizationTitle}`)}
                    </MainTitle>
                    <IntegrationContainer>
                        {organizationList.map((item, index) => {
                            return (
                                <IntegrationCardInfo
                                    key={index}
                                    initial={initial}
                                    transition={{ delay: 0.9, duration: 0.6 }}
                                    animate={animation}>
                                    <ImgIcon src={item.logo} />
                                    <KnowMore>
                                        {item.more}
                                    </KnowMore>
                                    <Subtitle>
                                        {item.title}
                                    </Subtitle>
                                </IntegrationCardInfo>
                            );
                        })}
                    </IntegrationContainer>
                </Container>
            </Section>
        </>
    );
};

OrganizationSection.propTypes = {
    inverse: PropTypes.bool,
    showTitle: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    organizationTitle: PropTypes.string,
    organizationList: PropTypes.object
};

export default OrganizationSection;