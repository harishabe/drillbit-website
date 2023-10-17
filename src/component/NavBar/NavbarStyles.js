import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { black, primary, gray } from '../../Colors';

export const Nav = styled.nav`
	background: ${({ background }) => (background ? gray : gray)};
	box-shadow: ${({ background }) => (background ? 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;' : '')};
	color:${black}
	height: 86px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;	
	top: 0;
	z-index: 999;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	height: 86px;
	justify-content: start;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: ${black};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight:bold;
	display: flex;
	align-items: center;
	z-index: 100;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 100;

	@media screen and (max-width: 960px) {
		display: block;
		color:${({ background }) => (background ? black : black)};
		position: absolute;
		top: 5px;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavIcon = styled.img`
	margin-bottom: 1rem;
	margin-left:-1.2rem;
`;

export const NavMenu = styled.ul`
	font-size:0.938rem;
	line-height:18.29px;
	font-weight:400;
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		padding-top: 60px;
		top: ${({ show }) => (show ? 0 : '-120vh')};
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 65px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	margin-left: auto;

	button {
		background-color: transparent;
		border-radius: 5px;

		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}
`;

export const NavLinks = styled(Link)`
	color:${({ color }) => (color ? black : black)};
	display: flex;
	align-items: center;
	text-decoration: none;
	font-weight:bold;
	text-transform:capitalize;
	padding: 0.5rem 0.938rem;
	height: 100%;
	&.active {
		border-bottom: 2px solid #ebc214;
	}
	&:hover {
		border-bottom: 2px solid ${primary};
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;


export const NavSub = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	background: #fff;
	display: none;
	border-top: 2px solid #e5ebec;
`;


export const NavSubMenuContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: ${({ background }) => (background ? '5.3rem' : '7rem')};
	z-index:999;
	background: #fff;
	border-top: 1px Solid rgba(0, 0, 0, 0.2);
	height:150px;
	box-shadow:rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;
	
	@media screen and (max-width: 768px) {
		display: none;
	}
`;


export const NavSubMenu = styled.ul`
	font-size:0.938rem;
	line-height:18.29px;
	font-weight:400;
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		padding-top: 60px;
		top: ${({ show }) => (show ? 0 : '-120vh')};
		left: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);
	}
`;


export const NavSubMenuItemLink = styled(Link)``;
export const NavSubMenuItem = styled.li`
	cursor: pointer;
	width:33.333%;
	display:inline-flex;
	padding-top: 30px;
    padding-bottom: 30px;
	opacity:0.99;
	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavSubMenuContentImg = styled.img`
	margin-bottom: 1rem;
	margin-top:1rem;
	margin-left:1rem;
`;

export const NavSubMenuContentTitle = styled.p`
	margin-bottom: 10px;
	font-size: 1rem;
	font-weight:bold;
	color:${black};
`;

export const NavSubMenuContentSubTitle = styled.p`
	font-size: 12px;
	font-weight:500;
	color:${black};
`;

export const ArrowImg = styled.img`	
	margin-left: 8px;
	margin-top: 2px;
	width: 0.6rem;
`;