import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NotFound = ({ isAuthenticated }) => {
	return (
		<section className='about'>
			<div className='container'>
				<h2>
					<i className='fab fa-envira'></i> MONGOGIN
				</h2>
				<h3 className='text-center'>404: Page Not Found</h3>
				<Link
					className='btn'
					to={`${isAuthenticated ? '/dashboard' : '/'}`}
				>
					Go back
				</Link>
			</div>
		</section>
	);
};

NotFound.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(NotFound);
