import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import routes from './routes/route';
import GlobalStyle from './globalStyles';
import Navbar from './component/NavBar/NavBar';
import TopBar from './component/TopBar/TopBar';
import { navBarData, arrowData, ServiceSubMenu } from './data/homeData';
import ScrollToTop from './component/ScrollToTop';
import ZohoChat from './ZohoChat';
import CookieBanner from './component/CookieBanner/CookieBanner';

const App = () => {
    const routing = useRoutes(routes);
    return (
        <div>
            <GlobalStyle />
            <TopBar />
            <Navbar
                navBarData={navBarData}
                ServiceSubMenu={ServiceSubMenu}
                arrowData={arrowData}
            />
            {routing}
            <ScrollToTop />
            <ZohoChat />
            <CookieBanner />
        </div>
    );
};

export default App;
