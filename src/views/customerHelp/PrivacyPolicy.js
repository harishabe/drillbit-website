import React from 'react';
import PropTypes from 'prop-types';
import { Container, Section } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import {
    CustomerHelpTitle,
    CustomerHelpSubTitle,
    List,
    ListItem
} from './CustomerHelpStyle';

const PrivacyPolicy = ({
    privacyAboutTitle,
    privacyPolicyDescription,
    privacyApplicability,
    privacyApplicabilityDesc,
    privacyDefinitions,
    privacyDefinitionsData,
    privacyConsent,
    privacyConsentData,
    privacyCollectionTitle,
    privacyCollectionData,
    privacyCookiesTitle,
    privacyCookiesData,
    privacyUsageTitle,
    privacyUsageData,
    privacyComplicance,
    privacyComplicanceData,
    privacyDocumentation,
    privacyDocumentationData,
    privacyDataHandling,
    privacyDataHandlingData,
    privacyDispute,
    privacyDisputeDesc,
    privacyFeedback,
    privacyFeedbackDesc,
    privacyEuropeContact,
    privacyEuropeContactDetail,
    privacyContactUs,
    privacyContactDetail,
}) => {
    const { t } = useTranslation();
    return (
        <>
            <Section
                padding="50px 0 150px 0">
                <Container>
                    <>
                        <CustomerHelpTitle>
                            {t(`${privacyAboutTitle}`)}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyPolicyDescription}
                        </CustomerHelpSubTitle>
                        <CustomerHelpTitle>
                            {t(`${privacyApplicability}`)}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyApplicabilityDesc}
                        </CustomerHelpSubTitle>
                        <CustomerHelpTitle>
                            {t(`${privacyDefinitions}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyDefinitionsData.map((item) => {
                                return (
                                    <>
                                        <ListItem>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyConsent}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyConsentData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyCollectionTitle}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyCollectionData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyCookiesTitle}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyCookiesData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyUsageTitle}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyUsageData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyComplicance}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyComplicanceData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyDocumentation}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyDocumentationData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyDataHandling}`)}
                        </CustomerHelpTitle>
                        <List>
                            {privacyDataHandlingData.map((item, i) => {
                                return (
                                    <>
                                        <ListItem key={i}>{item}</ListItem>
                                    </>
                                );
                            })}
                        </List>
                        <CustomerHelpTitle>
                            {t(`${privacyDispute}`)}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyDisputeDesc}
                        </CustomerHelpSubTitle>
                        <CustomerHelpTitle>
                            {privacyFeedback}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyFeedbackDesc}
                        </CustomerHelpSubTitle>
                        <CustomerHelpTitle>
                            {privacyEuropeContact}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyEuropeContactDetail}
                        </CustomerHelpSubTitle>
                        <CustomerHelpTitle>
                            {privacyContactUs}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyContactDetail}
                        </CustomerHelpSubTitle>
                    </>
                </Container>
            </Section>
        </>
    );
};

PrivacyPolicy.propTypes = {
    privacyAboutTitle: PropTypes.string,
    privacyPolicyDescription: PropTypes.string,
    privacyApplicability: PropTypes.string,
    privacyApplicabilityDesc: PropTypes.string,
    privacyDefinitions: PropTypes.string,
    privacyDefinitionsData: PropTypes.object,
    privacyConsent: PropTypes.string,
    privacyConsentData: PropTypes.string,
    privacyCollectionTitle: PropTypes.string,
    privacyCollectionData: PropTypes.object,
    privacyCookiesTitle: PropTypes.string,
    privacyCookiesData: PropTypes.object,
    privacyUsageTitle: PropTypes.string,
    privacyUsageData: PropTypes.object,
    privacyComplicance: PropTypes.string,
    privacyComplicanceData: PropTypes.object,
    privacyDocumentation: PropTypes.string,
    privacyDocumentationData: PropTypes.object,
    privacyDataHandling: PropTypes.string,
    privacyDataHandlingData: PropTypes.object,
    privacyDispute: PropTypes.string,
    privacyDisputeDesc: PropTypes.string,
    privacyFeedback: PropTypes.string,
    privacyFeedbackDesc: PropTypes.object,
    privacyEuropeContact: PropTypes.string,
    privacyEuropeContactDetail: PropTypes.string,
    privacyContactUs: PropTypes.string,
    privacyContactDetail: PropTypes.string
};

export default PrivacyPolicy;
