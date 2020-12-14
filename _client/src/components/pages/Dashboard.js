import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
	return (
		<section className='dashboard'>
			<div className='container'>
				<h2 className='mb-4'>DASHBOARD</h2>
				<p>Hi {user && user.name}! Welcome to your dashboard.</p>
			</div>
		</section>
	);
};

Dashboard.propTypes = {
	user: PropTypes.object
};

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
