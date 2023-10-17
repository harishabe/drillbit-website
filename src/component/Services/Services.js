import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../../globalStyles';
import { bannerColor, white } from './../../Colors';
import {
    ClientHeading,
} from './../Clients/ClientsStyle';
import {
    ServiceLogoTitle,
    Line,
    ImgIcon,
    ServiceContainer,
    ServiceCardInfo
} from './ServicesStyle';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Services = (props) => {
    const {
        inverse,
        headline,
        title,
        icons,
        line,
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
                bgColor={bannerColor}
                padding="120px 0"
                ref={ref}
                id={id}>
                <Container>
                    <ClientHeading
                        color={white}
                        initial={initial}
                        transition={transition}
                        animate={animation}
                        inverse={inverse}
                    >
                        {t(title)}
                    </ClientHeading>
                    <ServiceLogoTitle
                        color={white}
                        fontSize="1.125rem"
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}>
                        {t(headline)}
                    </ServiceLogoTitle>
                    <ServiceContainer
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}>
                        {icons.map((item, index) => {
                            return (
                                <ServiceCardInfo key={index}>
                                    <ImgIcon src={item.icon} />
                                    <Line>
                                        <ImgIcon src={line} />
                                    </Line>
                                    <ServiceLogoTitle>
                                        {t(item.title)}
                                    </ServiceLogoTitle>
                                </ServiceCardInfo>
                            );
                        })}
                    </ServiceContainer>
                </Container>
            </Section>
        </>
    );
};

Services.propTypes = {
    inverse: PropTypes.bool,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
    statistics: PropTypes.array,
    title: PropTypes.string,
    icons: PropTypes.array,
    line: PropTypes.string,
};

export default Services;