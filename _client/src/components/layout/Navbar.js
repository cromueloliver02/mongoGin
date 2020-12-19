import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setModal } from '../../_actions/alert';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, setModal }) => {
	const onLogout = e => {
		setModal('Sign out', 'Are you sure you wanna logout?');

		e.preventDefault();
	};

	const authLinks = (
		<ul className='custom-navbar-nav'>
			<li className='custom-nav-item'>
				<Link to='/dashboard' className='custom-nav-link'>
					Dashboard
				</Link>
				<Link to='/about' className='custom-nav-link ml-3'>
					About
				</Link>
				<a href='#!' onClick={onLogout} className='custom-nav-link ml-3'>
					<i className='fas fa-sign-out-alt'></i> Logout
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul className='custom-navbar-nav'>
			{/* <li className='nav-item'>
				<Link to='/about' className='nav-link'>
					About
				</Link>
			</li> */}
		</ul>
	);

	return (
		<nav className='custom-navbar'>
			<div className='container'>
				<Link to='/' className='custom-navbar-brand'>
					<i className='fab fa-envira logo-icon'></i>
					<span className='text-main'>Mongo</span>Gin
				</Link>
				{!loading && (
					<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
				)}
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	auth: PropTypes.object.isRequired,
	setModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { setModal })(Navbar);
