import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div className='background'>
			<div className='container'>
				<h1 className='landing-name text-center'>
					<i className='fab fa-envira'></i> MongoGin
				</h1>
				<div className='w-50'>
					<p className='lead text-center mb-4'>
						Welcome! MongoGin is Cromuel's project for the sixth day of
						his daily project challenge.
					</p>
				</div>
				<div className='text-center'>
					<Link to='login' className='btn'>
						Sign In
					</Link>
					<Link to='register' className='btn btn-dark ml-3'>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
