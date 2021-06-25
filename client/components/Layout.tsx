import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import GlobalStyle from '../src/styles/globalStyles';

interface IProps {
	children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
