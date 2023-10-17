import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Section, Title } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import { gray } from './../../../Colors';
import {
    ContentRow,
    TextWrapper,
    BigColumn,
    SmallColumn,
    Heading
} from './../../../component/Content/ContentStyles';
import {
    OrganizationImgIcon,
    ImgIcon,
    OrganizationSubTitle,
    OrganizationSubTitle2
} from './OrganizationStyle';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const OrganizationSubSection = (props) => {
    const {
        inverse,
        showTitle,
        type,
        organizationSubsectionTitle,
        imgSubSection,
        organizationSubsectionImage,
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
                bgColor={gray}
                ref={ref}
                padding={showTitle ? '50px 0' : '30px 0'}>
                <Container>
                    <ContentRow>
                        <SmallColumn>
                            <TextWrapper>
                                <Title fontSize="1.125rem">
                                    {type}
                                </Title>
                                <Heading
                                    fontSize="2.25rem"
                                    initial={initial}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    animate={animation}
                                    inverse={inverse}
                                >
                                    {t(`${organizationSubsectionTitle}`)}
                                </Heading>
                                <OrganizationImgIcon
                                    src={imgSubSection}
                                />
                            </TextWrapper>
                        </SmallColumn>
                        <BigColumn
                            initial={initial}
                            transition={{ delay: 1, duration: 0.6 }}
                            animate={animation}>
                            {organizationSubsectionImage.map((item, key) => {
                                return (
                                    <>
                                        <ImgIcon key={key} src={item.image} />
                                        <OrganizationSubTitle>
                                            {item.title}
                                        </OrganizationSubTitle>
                                        <OrganizationSubTitle2>
                                            {item.subtitle}
                                        </OrganizationSubTitle2>
                                    </>
                                );
                            })}
                        </BigColumn>
                    </ContentRow>
                </Container>
            </Section>
        </>
    );
};

OrganizationSubSection.propTypes = {
    inverse: PropTypes.bool,
    showTitle: PropTypes.bool,
    description: PropTypes.string,
    headline: PropTypes.string,
    type: PropTypes.string,
    fontSize: PropTypes.string,
    buttonLabel: PropTypes.string,
    organizationTitle: PropTypes.string,
    organizationList: PropTypes.object,
    organizationSubsectionTitle: PropTypes.string,
    imgSubSection: PropTypes.string,
    organizationSubsectionImage: PropTypes.object
};

export default OrganizationSubSection;