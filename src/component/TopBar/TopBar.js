import React from 'react';
import {
    Topbar,
    TopbarContainer,
    EmailId,
    Language
} from './TopBarStyle';
import LangTranslator from './../LangTranslator';
import WhatsAppChat from './../../WhatsAppChat';

const TopBar = () => {

    return (
        <Topbar>
            <TopbarContainer>
                <EmailId>sales@drillbitplagiarism.com</EmailId>                
                <WhatsAppChat />
                <Language>
                    <LangTranslator />
                </Language>
            </TopbarContainer>
        </Topbar>
    );
};

export default TopBar;