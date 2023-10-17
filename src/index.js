import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import './../node_modules/flag-icon-css/css/flag-icons.css';
import './index.scss';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ar', 'fr', 'no'],
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: './assets/locales/{{lng}}/translation.json',
        },
    });

const loadingMarkup = (
    <div>
        <h3>Loading..</h3>
    </div>
);

ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <BrowserRouter basename={'/'}>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
