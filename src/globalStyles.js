import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { primary, white } from './Colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 50px')};

	@media screen and (max-width: 960px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Title = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 24px;
	font-size: ${({ fontSize }) => (fontSize)};
	font-weight:bold;
	text-align:${({ align }) => (align)};
	color: ${primary};
`;

export const MainTitle = styled(motion.p)`
	margin-bottom: 24px;
	max-width:${({ maxWidth }) => (maxWidth)};
	font-size: ${({ fontSize }) => (fontSize)};
	font-weight:${({ fontWeight }) => (fontWeight)};
`;


export const Button = styled(motion.button)`
	border-radius: 4px;
	background-image: linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF);
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '14px 20px')};
	color:${white};
	font-size: 0.9rem;
	font-weight:bold;
	outline: none;
	border: none;
	cursor: pointer;
	text-transform:uppercase;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
		color: ${white};
		background-color: ${primary};
	}
`;

export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse, bgColor }) => (inverse ? '#101522' : bgColor)};
	color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '20px 0')};
	}
`;


export const Row = styled(motion.div)`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '100%')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Column = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const TextWrapper = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
`;

export const ImgIcon = styled.img`
	margin-bottom: 1rem;
	margin-left:-1.2rem;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LogoIconContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
`;

export const LogoIcon = styled(motion.div)`
	padding: 25px;
	text-align: center;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const Line = styled.div`
	margin:1rem 0rem 1rem 0rem;
	border-bottom:1.5px solid ${primary};
`;

export const DividerImg = styled.img`
	margin-top:5rem;
	width:100%;
`;

export const WhatsAppImg = styled.img`
	width: 100px;
	margin-left: 1%;
`;

export default GlobalStyle;