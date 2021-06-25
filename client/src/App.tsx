import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './views/Home';
import Shop from './views/Shop';
import Contact from './views/Contact';
import Login from './views/Login';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />

				<Switch>
					<Route exact component={Home} path="/" />
					<Route component={Shop} path="/shop" />
					<Route component={Contact} path="/contact" />
					<Route component={Login} path="/login" />
				</Switch>

				<Footer />
			</Router>
		</>
	);
};

export default App;
