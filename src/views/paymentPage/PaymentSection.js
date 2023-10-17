import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section, Button } from '../../globalStyles';
import {
    PaymentContainer,
    PaymentPriceContainer,
    PaymentPriceCardInfo,
    PaymentCardInfo,
    Title,
    Circle,
    SubTitle,
    Price,
    PayNow,
    SubTitlePayment
} from './PaymentStyle';

const PaymentSection = ({
    paymentSteps,
    paymentCard
}) => {
    return (
        <>
            <Section
                padding="30px 0px 150px 0px">
                <Container>
                    <Title>
                        The complete cost effective plagiarism software solution
                    </Title>
                    <PaymentContainer>
                        {paymentSteps.map((item, i) => {
                            return (
                                <>
                                    <PaymentCardInfo key={i}>
                                        <Circle>{item.step}</Circle>
                                        <SubTitle>
                                            {item.title}
                                        </SubTitle>
                                    </PaymentCardInfo>
                                </>
                            );
                        })}
                    </PaymentContainer>
                    <PaymentPriceContainer>
                        {paymentCard.map((item, index) => {
                            return (
                                <PaymentPriceCardInfo
                                    key={index}
                                >
                                    {item.title}
                                    <Price>
                                        {item.price}
                                        <sub style={{ fontSize: '12px' }}>{item.gst}</sub>
                                    </Price>
                                    <SubTitlePayment>
                                        {item.subTitle}
                                    </SubTitlePayment>
                                    <PayNow href={item.payLink} target="_blank" rel="noopener noreferrer">
                                        <Button>
                                            Pay Now
                                        </Button>
                                    </PayNow>
                                </PaymentPriceCardInfo>
                            );
                        })}
                    </PaymentPriceContainer>
                </Container>
            </Section>
        </>
    );
};


PaymentSection.propTypes = {
    paymentSteps: PropTypes.object,
    paymentCard: PropTypes.object
};

export default PaymentSection;
