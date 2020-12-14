import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Modal from './components/layout/Modal';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './_actions/auth';

if (localStorage.getItem('token')) {
	setAuthToken(localStorage.getItem('token'));
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Alert />
					<Navbar />
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
						<PrivateRoute exact path='/about' component={About} />
					</Switch>
					<Modal />
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
