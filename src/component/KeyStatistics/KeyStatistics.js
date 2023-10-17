import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, Section, Title, Line } from '../../globalStyles';
import {
    StatisticHeading,
    StatisticSubtitle,
    StatisticsContainer,
    StatisticsCardInfo,
    StatisticsLabel,
    StatisticsSecondaryLabel,
    StatisticsSubtitle
} from './KeyStatisticsStyle.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const KeyStatistics = (props) => {
    const {
        inverse,
        headline,
        description,
        fontSize,
        id,
        statistics
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
            <Section padding="60px 0" ref={ref} id={id}>
                <Container>
                    <Title fontSize="1.125rem">Key Statistics</Title>
                    <StatisticHeading
                        fontSize={fontSize}
                        initial={initial}
                        transition={transition}
                        animate={animation}
                        inverse={inverse}>
                        {t(headline)}
                    </StatisticHeading>
                    <StatisticSubtitle
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}>
                        {t(description)}
                    </StatisticSubtitle>
                    <StatisticsContainer
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}>
                        {statistics.map((data, index) => {
                            return (
                                <StatisticsCardInfo
                                    key={index}>
                                    <StatisticsLabel>
                                        {data.count}
                                    </StatisticsLabel>
                                    <StatisticsSecondaryLabel>
                                        {data.title}
                                    </StatisticsSecondaryLabel>
                                    <Line />
                                    <StatisticsSubtitle>
                                        {data.subtitle}
                                    </StatisticsSubtitle>
                                </StatisticsCardInfo>
                            );
                        })}
                    </StatisticsContainer>
                </Container>
            </Section>
        </>
    );
};

KeyStatistics.propTypes = {
    inverse: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
    statistics: PropTypes.array
};

export default KeyStatistics;