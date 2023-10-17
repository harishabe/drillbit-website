import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { useTranslation } from 'react-i18next';
import {
    Nav,
    MobileIcon,
    NavbarContainer,
    NavLogo,
    NavIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavSubMenuContainer,
    NavSubMenu,
    NavSubMenuItem,
    NavSubMenuContentImg,
    NavSubMenuContentTitle,
    NavSubMenuContentSubTitle,
    ArrowImg
} from './NavbarStyles';
import drillBitLogo from './drillBitLogo.svg';
// import drillBitWhiteLogo from './drillBitWhiteLogo.svg';

const Navbar = (props) => {
    const {
        navBarData,
        arrowData,
        ServiceSubMenu
    } = props;
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showServiceSubMenu, setShowServiceSubMenu] = useState(false);

    const [background, setBackground] = useState(false);
    const [color, setColor] = useState(false);
    const [logo, setLogo] = useState(false);

    const closeMobileMenu = (e) => {
        if (e.target.innerText === 'Products') {
            setShowSubMenu(!showSubMenu);
            setShowServiceSubMenu(false);
        }
        if (e.target.innerText === 'Support') {
            setShowServiceSubMenu(!showServiceSubMenu);
            setShowSubMenu(false);
        }
        if (e.target.innerText === 'Integration') {
            setShowServiceSubMenu(false);
            setShowSubMenu(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (e.target.innerText === 'Contact') {
            setShowServiceSubMenu(false);
            setShowSubMenu(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (e.target.innerText === 'Home') {
            setShowServiceSubMenu(false);
            setShowSubMenu(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setShow(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setBackground(true);
                setColor(true);
                setLogo(true);
                return;
            }
            setBackground(false);
            setColor(false);
            setLogo(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigateTo = (link) => {
        navigate('/' + link);
        setShowSubMenu(false);
        setShowServiceSubMenu(!showServiceSubMenu);
        setShowServiceSubMenu(false);
    };

    const navigateToSub = (link) => {
        if (link.menu === 'products') {
            setShowSubMenu(!showSubMenu);
            setShowServiceSubMenu(false);
        }
        if (link.menu === 'support') {
            setShowServiceSubMenu(!showServiceSubMenu);
            setShowSubMenu(false);
        }
    };

    return (
        <>
            <Nav background={background}>
                <NavbarContainer>
                    <NavLogo background={background} to="/" onClick={scroll.scrollToTop}>
                        <NavIcon src={logo ? drillBitLogo : drillBitLogo} alt="DrillBit" />
                    </NavLogo>
                    <MobileIcon background={background} onClick={() => setShow(!show)}>
                        {show ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu background={background} onClick={() => setShow(!show)} show={show}>
                        {arrowData.map((navItem, index) => (
                            <NavItem key={index}>
                                <NavLinks
                                    color={color}
                                    spy={true}
                                    duration={500}
                                    smooth={true}
                                    exact="true"
                                    offset={-80}
                                    to={navItem.link !== undefined && navItem.link}
                                    onClick={closeMobileMenu}
                                >
                                    {t(navItem.menu)}
                                    {navItem.arrow ?
                                        <ArrowImg onClick={() => navigateToSub(navItem)}
                                            src={showSubMenu ? './images/navSubMenuIcon/arrowUp.svg' :
                                                './images/navSubMenuIcon/arrowDown.svg'} />
                                        : ''}
                                </NavLinks>
                            </NavItem>
                        ))}
                        <NavItemBtn>
                            <a href="https://www.drillbitplagiarismcheck.com/auth/login" target='_blank' rel="noreferrer">
                                <Button onClick={closeMobileMenu} primary>
                                    {t('buttonLabel')}
                                </Button>
                            </a>
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            {showSubMenu ?
                <NavSubMenuContainer background={background}>
                    <NavSubMenu>
                        {navBarData.map((navItem, index) => (
                            <NavSubMenuItem key={index} onClick={() => navigateTo(navItem.link)}>
                                <div style={{ width: '30%' }}>
                                    <NavSubMenuContentImg src={navItem.icon} alt="DrillBit" />
                                </div>
                                <div style={{ width: '70%' }}>
                                    <NavSubMenuContentTitle>{navItem.title}</NavSubMenuContentTitle>
                                    <NavSubMenuContentSubTitle>{navItem.subTitle}</NavSubMenuContentSubTitle>
                                </div>
                            </NavSubMenuItem>
                        ))}
                    </NavSubMenu>
                </NavSubMenuContainer> : ''}
            {showServiceSubMenu ?
                <NavSubMenuContainer background={background}>
                    <NavSubMenu>
                        {ServiceSubMenu.map((navItem, index) => (
                            <NavSubMenuItem key={index} onClick={() => navigateTo(navItem.link)}>
                                <div style={{ width: '30%' }}>
                                    <NavSubMenuContentImg src={navItem.icon} alt="DrillBit" />
                                </div>
                                <div style={{ width: '70%' }}>
                                    <NavSubMenuContentTitle>{navItem.title}</NavSubMenuContentTitle>
                                    <NavSubMenuContentSubTitle>{navItem.subTitle}</NavSubMenuContentSubTitle>
                                </div>
                            </NavSubMenuItem>
                        ))}
                    </NavSubMenu>
                </NavSubMenuContainer> : ''}
        </>
    );
};

Navbar.propTypes = {
    navBarData: PropTypes.array,
    arrowData: PropTypes.array,
    ServiceSubMenu: PropTypes.array,
};

export default Navbar;