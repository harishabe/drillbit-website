import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, TextWrapper, Row, ImgIcon } from '../../globalStyles';
import { gray } from './../../Colors';
import {
    footerData,
    footerSocialData,
    plagiarismEasy,
    certifiedLogos
} from '../../data/footerData';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import {
    PlagiarismEasy,
    PlagiarismEsayTitle,
    PlagiarismEsaySubTitle,
    FooterColumn,
    FooterRow,
    FooterLine,
    WebsiteRights,
    FooterLink
} from './FooterStyle';
import DialogForm from './../../component/Dialog/DialogForm';

const Footer = () => {
    const initial = { opacity: 0, y: 30 };
    const transition = { delay: 0.3, duration: 0.6 };
    const animation = useAnimation();
    const currentYear = useRef(new Date().getFullYear());
    let navigate = useNavigate();
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

    const navigateTo = (link) => {
        navigate(link);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Section
            bgColor={gray}
            ref={ref}
            padding="50px 0"
            smPadding="104px 0px">
            <Container>
                <PlagiarismEasy>
                    <PlagiarismEsayTitle
                        initial={initial}
                        transition={transition}
                        animate={animation}
                        inverse={plagiarismEasy.inverse}>
                        {plagiarismEasy.title}
                    </PlagiarismEsayTitle>
                    <PlagiarismEsaySubTitle
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={plagiarismEasy.inverse}>
                        {plagiarismEasy.subtitle}
                    </PlagiarismEsaySubTitle>
                    <DialogForm
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}
                        primary
                        label={plagiarismEasy.buttonLabel}
                    />
                </PlagiarismEasy>
                <FooterRow>
                    {footerData.map((el, index) => (
                        <FooterColumn gap="0.5rem" key={index}>
                            <TextWrapper size="1.5rem" mb="0.4rem">
                                {el.title}
                            </TextWrapper>
                            {el.links.map((item, linkIndex) => (
                                item.link === 'iso' ? <div><img style={{width:'100px',height:'100px'}} src={item.name} /></div> : 
                                    <FooterLink
                                        style={{height:'25px'}}
                                        key={linkIndex}
                                        onClick={() => navigateTo(item.link)}
                                    //to={item.link}
                                    >
                                        <TextWrapper
                                            color="#171717"
                                            size="0.875rem">
                                            {item.name}
                                        </TextWrapper>                                   
                                    </FooterLink>
                            ))}
                        </FooterColumn> 
                    ))}
                </FooterRow>   
                <FooterRow>
                    <Row justify="center" gap="2rem" align="center" style={{marginLeft:'4rem'}} width="220px">
                        {certifiedLogos.map((item,index) => (
                            console.log('itemitemitemitem', item),
                            <div key={index}>
                                <img style={{width:'100px',height:'100px'}} alt={item.link} src={item.name} />
                            </div>
                        ))}
                    </Row>
                </FooterRow>   
                <FooterLine>
                    <Row justify="center" gap="2rem" align="center" width="220px">
                        {footerSocialData.map((social, index) => (
                            <div key={index}>
                                <a target='_blank' href={social.webLink} rel="noreferrer">
                                    <ImgIcon key={index} src={social.icon} />
                                </a>
                            </div>
                        ))}                        
                    </Row>                   
                    <WebsiteRights>Drillbit © {currentYear.current}. All rights reserved.</WebsiteRights>
                </FooterLine>
            </Container>
        </Section>
    );
};

export default Footer;
