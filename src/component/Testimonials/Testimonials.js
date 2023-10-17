import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Testimonial from './Testimonial';
import Whirligig from 'react-whirligig';
import {
    TestimonialRow, Left, Right, Heading
} from './TestimonialStyle';
import { Container, DividerImg, Section, Title, Button } from '../../globalStyles';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Testimonials = (props) => {
    const {
        fontSize,
        headline,
        description,
        leftArrow,
        rightArrow,
        divider,
        review
    } = props;

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

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    return (
        <>
            <Section
                ref={ref}
                padding='45px 0'>
                <Container>
                    <TestimonialRow>
                        <Left width="70%"
                            initial={initial}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            animate={animation}
                        >
                            <Title fontSize="1.125rem">
                                {description}
                            </Title>
                            <Heading
                                fontSize={fontSize}
                            >
                                {headline}
                            </Heading>
                        </Left>
                        <Right width="30%"
                            transition={{ delay: 0.7, duration: 0.6 }}
                            animate={animation}
                            style={{ textAlign: 'center' }}
                        >
                            <Button onClick={prev}>
                                <img src={leftArrow} />
                            </Button>
                            <Button style={{ marginLeft: '10px' }} onClick={next}>
                                <img src={rightArrow} />
                            </Button>
                        </Right>
                    </TestimonialRow>


                    <Whirligig
                        transition={{ delay: 0.9, duration: 0.6 }}
                        animate={animation}
                        preventScroll={true}
                        visibleSlides={1}
                        ref={(_whirligigInstance) => { whirligig = _whirligigInstance; }}
                    >
                        {review.map((item, i) => (
                            <Testimonial key={i} {...item} />
                        ))}
                    </Whirligig>
                </Container>
                <DividerImg src={divider}></DividerImg>
            </Section>
        </>
    );
};


Testimonials.propTypes = {
    fontSize: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    leftArrow: PropTypes.string,
    rightArrow: PropTypes.string,
    divider: PropTypes.string,
    review: PropTypes.object,
};


export default Testimonials;