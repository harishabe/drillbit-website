import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
    Title,
} from './NewsBlogStyle';

const NewsBlogSectionMore = () => {
    return (
        <>
            <Section
                padding="50px 0">
                <Container>
                    <Title>
                        SOC 2 - All 5 TSCs achieved by DrillBit
                    </Title> 
                    <b>
                        Headline:
                    </b> 
                    <div style={{margin:'15px 0px'}}>
                        DrillBit Plagiarism software is now SOC 2 (TYPE 2) certified for all 5 TSCs (Security, Availability, Confidentiality, Processing Integrity & Privacy)
                        We’re delighted to announce that DrillBit plagiarism detection software has achieved a SOC 2 (TYPE 2) certification, a rigorous international certification demonstrating our commitment to maintaining and protecting information security. 
                        Achieving this standard serves as third-party validation of DrillBit’s commitment to providing enterprise-level security and protecting customer data from potential breaches. 
                    </div>
                    <b>
                        Why SOC 2?:
                    </b> 
                    <div style={{margin:'15px 0px'}}>
                        We have always believed that we are the custodians of trust when it comes to our customers data. We are making every investment to establish and maintain the highest level of security and compliance. Achieving SOC 2 Type 2 for all 5 TSCs showcases our ongoing commitment to privacy and security and reinforces our rigorous policies and procedures to safeguard customer data.
                    </div>
                    <b>
                        How did we achieve SOC 2 (TYPE 2)?
                    </b> 
                    <div style={{margin:'15px 0px'}}>
                    DrillBit partnered with Sprinto - A powerful security compliance software for cloud-hosted companies. Sprinto is purpose-built for real-time monitoring of security controls - at scale with an intentional emphasis on each entity. It seamlessly integrates with our existing tools and automatically collects evidence with 100% continuous monitoring, ensuring we leave no loose threads when it comes to security and privacy.
                    DrillBit System and Organization Controls (SOC) 2 Type II audit was performed by <b>Sensiba San Filippo, LLP (SSF)</b>. <br /> <br />
                    Developed by the American Institute of Certified Public Accountants (AICPA), the SOC 2 information security standard is an audit report on the examination of controls relevant to the trust services criteria categories covering security, availability, confidentiality, processing integrity, and privacy. 
                    A SOC 2 Type II report describes a service organizations systems and whether the controls they have in place to satisfy the SOC criteria are operating effectively over an agreed upon observation period. <b>DrillBits SOC 2 Type II report had Security, Availability, Confidentiality, Processing Integrity, and Privacy in scope, and did not have any noted exceptions and therefore was issued with a “clean” audit opinion from SSF</b>
                    </div>
                    <b>
                    What’s next for DrillBit?
                    </b> 
                    <div style={{marginTop:'15px',marginBottom:'50px'}}>
                    DrillBit plagiarism checker is now very well-positioned to work with EdTech’s, Large corporates, and Academic Institutions that require SOC 2 Type II / ISO 27001:2013 compliance. With ambitious goals for the year ahead. DrillBit plans to sustain and maintain the certificate to ensure existing and new customers take care utmost importance when it comes to data security and protection.
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default NewsBlogSectionMore;
