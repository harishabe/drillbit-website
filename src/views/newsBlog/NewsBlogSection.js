import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, Section } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import {
    NewBlogContainer,
    NewBlogCardInfo,
    BlogTitle,
    SubTitle,
    ImgIcon,
    Title
} from './NewsBlogStyle';

const NewsBlogSection = ({
    blogs,
    blogTitle
}) => {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const navigateTo = (link) => {
        navigate(link);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Section
                padding="50px 0">
                <Container>
                    <Title>
                        {t(`${blogTitle}`)}
                    </Title>
                    <NewBlogContainer>
                        {blogs.map((item, i) => {
                            return (
                                <NewBlogCardInfo key={i}>
                                    <ImgIcon src={item.img} />
                                    <BlogTitle>
                                        {item.title}
                                    </BlogTitle>
                                    <SubTitle>
                                        {item.subTitle}
                                    </SubTitle>
                                    <SubTitle>
                                        <a style={{cursor:'pointer', textDecoration:'underline'}} onClick={() => navigateTo(item.morePath)}>Read More</a>
                                    </SubTitle>                                    
                                </NewBlogCardInfo>
                            );
                        })}
                    </NewBlogContainer>
                </Container>
            </Section>
        </>
    );
};


NewsBlogSection.propTypes = {
    blogs: PropTypes.object,
    blogTitle: PropTypes.string,
};

export default NewsBlogSection;
