import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    const handleAccept = () => {
    // Your logic for handling cookie acceptance
        setShowCookieBanner(false);
    };
    return (
        <CookieConsent
            enableDeclineButton
            onAccept={handleAccept}
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="cookie"
            expires={365}
            style={{ background: 'rgba(0, 0, 0, 0.8)', zIndex: 9999 }}
            buttonStyle={{
                backgroundColor: '#17a2b8',
                color: '#fff',
                fontSize: '13px',
            }}
            declineButtonStyle={{
                backgroundColor: '#6c757d',
                color: '#fff',
                fontSize: '13px',
            }}
        >
                This website uses cookies to ensure you get the best experience on our
                website. {showCookieBanner}
        </CookieConsent>
    );
};

export default CookieBanner;
