import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Section, MainTitle } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import { white } from './../../Colors';
import {
    IntegrationContainer,
    IntegrationCardInfo,
    ImgIcon,
    Subtitle,
    KnowMore
} from './LMSIntegrationStyle.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const LMSIntegration = (props) => {
    const {
        inverse,
        showTitle,
        lmsintegrationTitle,
        lmsIntegrationLogoTitle
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
            opacity: 1,
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
                padding={showTitle ? '50px 0' : '30px 0px 150px 0px'}>
                <Container>
                    <MainTitle
                        fontSize="2.25rem"
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}
                    >
                        {t(`${lmsintegrationTitle}`)}
                    </MainTitle>
                    <IntegrationContainer>
                        {lmsIntegrationLogoTitle.map((item, index) => {
                            return (
                                <IntegrationCardInfo
                                    key={index}
                                    initial={initial}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    animate={animation}>
                                    <ImgIcon src={item.logo} />
                                    <Subtitle>
                                        {item.title}
                                    </Subtitle>
                                    <KnowMore>
                                        {item.more}
                                    </KnowMore>
                                </IntegrationCardInfo>
                            );
                        })}
                    </IntegrationContainer>
                </Container>
            </Section>
        </>
    );
};

LMSIntegration.propTypes = {
    inverse: PropTypes.bool,
    showTitle: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    lmsintegrationTitle: PropTypes.string,
    lmsIntegrationLogoTitle: PropTypes.object
};

export default LMSIntegration;