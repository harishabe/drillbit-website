import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
    // {
    //     code: 'fr',
    //     name: 'Français',
    //     country_code: 'fr',
    // },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    // {
    //     code: 'ar',
    //     name: 'العربية',
    //     dir: 'rtl',
    //     country_code: 'sa',
    // },
    // {
    //     code: 'no',
    //     name: 'Norwegian',
    //     country_code: 'no',
    // },
];

export default function LangTranslator() {
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const { t } = useTranslation();
    const [language, setLanguage] = React.useState(currentLanguage?.name);

    const handleChange = (event) => {
        const lng = languages.find(u => u.name === event.target.value);
        i18next.changeLanguage(lng.code);
        setLanguage(event.target.value);
    };

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.title = t('app_title');
    }, [currentLanguage, t]);

    return (
        <select
            value={language}
            label="Language"
            onChange={handleChange}>
            {languages.map(({ code, name, country_code }) =>
                <option
                    name={code}
                    value={name}
                    key={country_code}>
                    {name} - {code}
                </option>
            )}
        </select>
    );
}