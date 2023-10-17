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

const CustomerSection = ({
    privacyAboutTitle,
    scope,
    privacyAboutDescription,
    termsConditionScope,
    termsConditionLimitationLiability,
    termsLimitLiabilityDesc,
    application,
    applicationDescription,
    showLimitLiability,
    showAboutDes,
    limitationLiability,
    limitationOfLiability,
    intellectualProperty,
    intellectualPropertyData,
    terminationOfSubscription,
    terminationOfSubscriptionData,
    disputeResolutionJurisdiction,
    disputeResolutionJurisdictionData
}) => {
    const { t } = useTranslation();
    return (
        <>
            <Section
                padding="50px 0 150px 0">
                <Container>
                    {showAboutDes ? <>
                        <CustomerHelpTitle>
                            {t(`${privacyAboutTitle}`)}
                        </CustomerHelpTitle>
                        <CustomerHelpSubTitle>
                            {privacyAboutDescription}
                        </CustomerHelpSubTitle>
                    </> : ''}

                    {showLimitLiability ?
                        <>
                            <CustomerHelpTitle>
                                {t(`${limitationLiability}`)}
                            </CustomerHelpTitle>
                            <CustomerHelpSubTitle>
                                {t(`${termsLimitLiabilityDesc}`)}
                            </CustomerHelpSubTitle>
                            <CustomerHelpTitle>
                                {t(`${application}`)}
                            </CustomerHelpTitle>
                            <CustomerHelpSubTitle>
                                {t(`${applicationDescription}`)}
                            </CustomerHelpSubTitle>
                        </> : ''}

                    <CustomerHelpTitle>
                        {t(`${scope}`)}
                    </CustomerHelpTitle>
                    <List>
                        {termsConditionScope.map((item) => {
                            return (
                                <>
                                    <ListItem>{item}</ListItem>
                                </>
                            );
                        })}
                    </List>

                    <CustomerHelpTitle>
                        {t(`${limitationOfLiability}`)}
                    </CustomerHelpTitle>
                    <List>
                        {termsConditionLimitationLiability.map((item) => {
                            return (
                                <>
                                    <ListItem>{item}</ListItem>
                                </>
                            );
                        })}
                    </List>

                    <CustomerHelpTitle>
                        {t(`${intellectualProperty}`)}
                    </CustomerHelpTitle>
                    <List>
                        {intellectualPropertyData.map((item) => {
                            return (
                                <>
                                    <ListItem>{item}</ListItem>
                                </>
                            );
                        })}
                    </List>

                    <CustomerHelpTitle>
                        {t(`${terminationOfSubscription}`)}
                    </CustomerHelpTitle>
                    <List>
                        {terminationOfSubscriptionData.map((item) => {
                            return (
                                <>
                                    <ListItem>{item}</ListItem>
                                </>
                            );
                        })}
                    </List>

                    <CustomerHelpTitle>
                        {t(`${disputeResolutionJurisdiction}`)}
                    </CustomerHelpTitle>
                    <List>
                        {disputeResolutionJurisdictionData.map((item) => {
                            return (
                                <>
                                    <ListItem>{item}</ListItem>
                                </>
                            );
                        })}
                    </List>
                    
                </Container>
            </Section>
        </>
    );
};

CustomerSection.propTypes = {
    privacyAboutTitle: PropTypes.string,
    privacyApplicability: PropTypes.string,
    privacyDefinitions: PropTypes.string,
    privacyConsent: PropTypes.string,
    privacyAboutDescription: PropTypes.string,
    privacyApplicabilityList: PropTypes.object,
    privacyConsentData: PropTypes.object,
    termsLimitLiabilityDesc: PropTypes.string,
    showLimitLiability: PropTypes.bool,
    showAboutDes: PropTypes.bool,
    limitationLiability: PropTypes.string,
    applicationDescription: PropTypes.string,
    application: PropTypes.string,
    termsConditionScope: PropTypes.object,
    termsConditionLimitationLiability: PropTypes.object,
    scope: PropTypes.string,
    limitationOfLiability: PropTypes.string,
    intellectualProperty: PropTypes.string,
    intellectualPropertyData: PropTypes.object,
    terminationOfSubscription: PropTypes.string,
    terminationOfSubscriptionData: PropTypes.object,
    disputeResolutionJurisdiction: PropTypes.string,
    disputeResolutionJurisdictionData:PropTypes.object
};

export default CustomerSection;
