import React from 'react';
import { useTranslation } from 'react-i18next';

function Login() {

    const { t } = useTranslation();

    return (
        <div>
            {t('login_page')}
        </div>
    );
}

export default Login;
