import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../../globalStyles';
import { white, primary, textColor } from './../../Colors';
import {
    ClientHeading,
    ClientSubtitle
} from './ClientsStyle';
import {
    StatisticsContainer,
    StatisticsCardInfo,
} from './../KeyStatistics/KeyStatisticsStyle';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Certifications = (props) => {
    const {
        inverse,
        headline,
        title,
        clientLogo,
        id
    } = props;
    const { t } = useTranslation();
    const initial = { opacity: 0, y: 30 };
    const transition = { delay: 0.3, duration: 0.6 };
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
                padding="16px 0 150px 0"
                ref={ref}
                id={id}>
                <Container>
                    <ClientHeading
                        color={primary}
                        initial={initial}
                        transition={transition}
                        animate={animation}
                        inverse={inverse}
                    >
                        {t(title)}
                    </ClientHeading>
                    <ClientSubtitle
                        color={textColor}
                        fontSize="1.25rem"
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}>
                        {t(headline)}
                    </ClientSubtitle>
                    <StatisticsContainer
                        style={{display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}>
                        {clientLogo.map((item, index) => {
                            return (
                                <StatisticsCardInfo 
                                    style={{padding:'10px', textAlign:'center'}} 
                                    key={index}>
                                    <img style={{width:'350px', height:'350px'}} src={item.logo} />
                                </StatisticsCardInfo>
                            );
                        })}
                    </StatisticsContainer>
                </Container>
            </Section>
        </>
    );
};

Certifications.propTypes = {
    inverse: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
    statistics: PropTypes.array,
    title: PropTypes.string,
    clientLogo: PropTypes.array
};

export default Certifications;