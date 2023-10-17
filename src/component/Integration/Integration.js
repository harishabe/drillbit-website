import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from '../../globalStyles';
// import { useTranslation } from 'react-i18next';
import {
    ContentRow,
    TextWrapper,
    BigColumn,
    SmallColumn,
    ContentIcon
} from './../Content/ContentStyles';
import {
    ImgIcon,
    IntegrationContainer,
    IntegrationCardInfo,
    Title
} from './IntegrationStyle';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Content = (props) => {
    const {
        textAlign,
        img,
        logoList
    } = props;
    // const { t } = useTranslation();
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
            <Section ref={ref} padding="10px 0">
                <Container>
                    <ContentRow>
                        <BigColumn
                            initial={initial}
                            transition={transition}
                            animate={animation}>
                            <ContentIcon
                                src={img}
                            />
                        </BigColumn>
                        <SmallColumn>
                            <TextWrapper>
                                <Title
                                    align={textAlign}
                                    initial={initial}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    animate={animation}>
                                    Integration
                                </Title>
                                <IntegrationContainer>
                                    {logoList.map((item, index) => {
                                        return (
                                            <IntegrationCardInfo
                                                key={index}
                                                initial={initial}
                                                transition={{ delay: 1, duration: 0.6 }}
                                                animate={animation}>
                                                <ImgIcon src={item.logo} />
                                            </IntegrationCardInfo>
                                        );
                                    })}
                                </IntegrationContainer>
                            </TextWrapper>
                        </SmallColumn>
                    </ContentRow>
                </Container>
            </Section>
        </>
    );
};

Content.propTypes = {
    inverse: PropTypes.bool,
    showTitle: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    img: PropTypes.string,
    textAlign: PropTypes.string,
    logoList: PropTypes.array,
};

export default Content;