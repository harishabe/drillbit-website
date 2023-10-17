import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Container, Section, Title, MainTitle } from '../../globalStyles';
import {
    UserGuideContainer,
    UserGuideCardInfo,
    HeaderTitle,
    SubTitle
} from './SupportPageStyle.js';
import { white } from './../../Colors';

const UserGuideSection = (props) => {
    const {
        showTitle,
        userGuideLineTitle,
        userGuideLineSubTitle,
        userGuideLineDoc,
    } = props;

    const { t } = useTranslation();

    return (
        <>
            <Section
                bgColor={white}
                padding={showTitle ? '50px 0' : '30px 30px 100px 30px'}>
                <Container>
                    <Title fontSize="1.125rem">
                        {t(`${userGuideLineTitle}`)}
                    </Title>
                    <MainTitle
                        fontSize="2.25rem"
                    >
                        {t(`${userGuideLineSubTitle}`)}
                    </MainTitle>
                    <UserGuideContainer>
                        {userGuideLineDoc.map((item, index) => {
                            return (
                                <UserGuideCardInfo key={index}>
                                    <a href={process.env.PUBLIC_URL + item.downloadLink} attributes-list download>
                                        <img style={{ width: '3rem' }} src={item.logo} download />
                                    </a>
                                    <HeaderTitle>
                                        {item.title}
                                    </HeaderTitle>
                                    <SubTitle>
                                        {item.description}
                                    </SubTitle>
                                    <a href={process.env.PUBLIC_URL + item.downloadLink} attributes-list download>
                                        <img style={{ width: '6rem' }} src={item.downloadIcon} />
                                    </a>
                                </UserGuideCardInfo>
                            );
                        })}
                    </UserGuideContainer>
                </Container>
            </Section>
        </>
    );
};

UserGuideSection.propTypes = {
    showTitle: PropTypes.bool,
    userGuideLineTitle: PropTypes.string,
    userGuideLineSubTitle: PropTypes.string,
    userGuideLineDoc: PropTypes.object
};

export default UserGuideSection;
