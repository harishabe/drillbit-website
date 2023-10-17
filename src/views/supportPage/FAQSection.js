import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Container, Section, MainTitle } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import { white } from './../../Colors';
import {
    UserGuideContainer,
    UserGuideCardInfo,
    FaqTitle,
    SubTitle,
} from './SupportPageStyle.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const FAQSection = (props) => {
    const {
        inverse,
        showTitle,
        faqTitle,
        faqList
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
                padding={showTitle ? '50px 0' : '30px 0px 100px 0px'}>
                <Container>
                    <MainTitle
                        maxWidth="680px"
                        fontSize="2.25rem"
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}
                    >
                        {t(`${faqTitle}`)}
                    </MainTitle>
                    <UserGuideContainer>
                        {faqList.map((item, index) => {
                            return (
                                <UserGuideCardInfo
                                    key={index}
                                    initial={initial}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    animate={animation}>
                                    <FaqTitle>
                                        {item.title}
                                    </FaqTitle>
                                    {item.list.map((item) => {
                                        return (
                                            <>
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}>
                                                        <SubTitle>
                                                            {item.question}
                                                        </SubTitle>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <SubTitle>
                                                            {item.anwser}
                                                        </SubTitle>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        );
                                    })}
                                </UserGuideCardInfo>
                            );
                        })}
                    </UserGuideContainer>
                </Container>
            </Section>
        </>
    );
};

FAQSection.propTypes = {
    inverse: PropTypes.bool,
    showTitle: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    faqTitle: PropTypes.string,
    faqList: PropTypes.object
};

export default FAQSection;