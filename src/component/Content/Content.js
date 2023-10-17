import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Section, Title } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import { gray, white } from './../../Colors';
import {
    ContentRow,
    TextWrapper,
    BigColumn,
    SmallColumn,
    Heading,
    Subtitle,
    ContentIcon,
    ProductsCard,
    ProductRow,
    ProductColumn,
    ProductTitle,
    ProductIcon,
    LineIcon,
    Line
} from './ContentStyles.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import DialogForm from './../../component/Dialog/DialogForm';

const Content = (props) => {
    const {
        inverse,
        headline,
        showTitle,
        description,
        fontSize,
        buttonLabel,
        img,
        btnShow,
        imgWidth,
        prodType,
        trailRegistration,
        regionalPadding,
        isShowAicte
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
                bgColor={showTitle ? white : gray}
                ref={ref}
                padding={showTitle ? '7vw 0' : regionalPadding? '1.6vw' :'8vw 0'}>
                <Container>
                    <ContentRow>
                        <SmallColumn>
                            <TextWrapper>
                                {showTitle ?
                                    <Title fontSize="1.125rem">Products</Title> : ''}
                                <Heading
                                    fontSize={fontSize}
                                    initial={initial}
                                    transition={transition}
                                    animate={animation}
                                    inverse={inverse}
                                >
                                    {t(`${headline}`)}
                                </Heading>
                                <Subtitle
                                    initial={initial}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    animate={animation}
                                    inverse={inverse}
                                >
                                    {isShowAicte ? <div style={{textAlign:'justify'}}>{t(description)}</div>:t(description)}
                                </Subtitle>
                                {btnShow ?
                                    <>
                                        <DialogForm
                                            initial={initial}
                                            trailRegistration={trailRegistration}
                                            transition={{ delay: 1, duration: 0.6 }}
                                            animate={animation}
                                            primary
                                            label={buttonLabel}
                                        />
                                    </>
                                    : ''}

                            </TextWrapper>
                        </SmallColumn>
                        <BigColumn
                            initial={initial}
                            transition={transition}
                            animate={animation}>
                            {showTitle ?
                                <ProductsCard>
                                    <ProductRow>
                                        {prodType.map((item, i) => {
                                            return (
                                                <ProductColumn width="33.3%" key={i}>
                                                    <ProductIcon src={item.image} />
                                                    <ProductTitle>
                                                        <Line />
                                                        {item.type}
                                                    </ProductTitle>
                                                    <Link to={item.navLink}>
                                                        <LineIcon mt="1rem" src={item.arrow} />
                                                    </Link>
                                                </ProductColumn>
                                            );
                                        })}
                                    </ProductRow>
                                </ProductsCard> :
                                <>
                                    <ContentIcon imgWidth={imgWidth}
                                        src={img}
                                    />                                
                                </>}
                        </BigColumn>
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
    btnShow: PropTypes.bool,
    imgWidth: PropTypes.string,
    prodType: PropTypes.object,
    trailRegistration: PropTypes.bool,
    regionalPadding: PropTypes.bool,
    isShowAicte: PropTypes.bool
};

export default Content;