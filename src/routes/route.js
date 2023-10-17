import React from 'react';
import MainLayout from '../layout/MainLayout.js';
import LoginView from '../views/auth/Login.js';
import ForgotPwd from '../views/auth/ForgotPwd.js';
import Dashboard from '../views/Dashboard.js';
import HomePage from '../views/HomePage.js';
import Institute from '../views/productPage/Institute';
import Personal from '../views/productPage/Personal';
import Organizations from '../views/productPage/Organizations';
import IntegrationPage from '../views/integrationPage/IntegrationPage.js';
import FAQ from '../views/supportPage/FAQ';
import OpenAPI from '../views/supportPage/OpenAPI';
import UserGuide from '../views/supportPage/UserGuide';
import NewsBlog from '../views/newsBlog/NewsBlog';
import NewsBlogMore from '../views/newsBlog/NewsBlogMore';
import AboutUsPage from '../views/aboutUSPage/AboutUsPage';
import CustomerHelp from '../views/customerHelp/CustomerHelp';
import CookiePolicy from '../views/customerHelp/CookiePolicy';
import TermsCondition from '../views/customerHelp/TermsCondition';
import ContactUs from '../views/contactUs/ContactUs';
import PaymentPage from '../views/paymentPage/Payment';
import RegistrationForm from '../views/registrationTrail/RegistrationForm';
import UnicodeConverter from '../views/unicodeConversion/UnicodeConverter.js';
import Regional from '../views/productPage/Regional.js';
import AIDetection from '../views/productPage/AIDetection.js';
import NotFound from '../views/404';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/about', element: <AboutUsPage /> },
            { path: '/integration', element: <IntegrationPage /> },
            { path: '/institute', element: <Institute /> },
            { path: '/personal', element: <Personal /> },
            { path: '/organization', element: <Organizations /> },
            { path: '/faq', element: <FAQ /> },
            { path: '/openAPI', element: <OpenAPI /> },
            { path: '/UserGuide', element: <UserGuide /> },
            { path: '/blog', element: <NewsBlog /> },
            { path: '/more-blog', element: <NewsBlogMore /> },
            { path: '/customerHelp', element: <CustomerHelp /> },
            { path: '/cookiePolicy', element: <CookiePolicy /> },
            { path: '/termsCondition', element: <TermsCondition /> },
            { path: '/payment', element: <PaymentPage /> },
            { path: '/contactus', element: <ContactUs /> },
            { path: '/trail-registration', element: <RegistrationForm /> },
            { path: '/login', element: <LoginView /> },
            { path: '/forgotpassword', element: <ForgotPwd /> },
            { path: '/unicodeConverter', element: <UnicodeConverter /> },
            { path: '/regional-language', element: <Regional /> },           
            { path: '/ai-detection', element: <AIDetection /> },           
             
            { path: '*', element: <NotFound /> }
        ]
    },
    {
        path: '/dashboard/:paperId/:qKey/:token',
        element: <Dashboard />
    }
];

export default routes;