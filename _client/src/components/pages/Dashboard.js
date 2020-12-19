import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import Contacts from '../contacts/Contacts';

const Dashboard = ({ user }) => {
	return (
		<section className='dashboard'>
			<div className='container'>
				{user && (
					<p className='mb-4'>
						Hi {user.name}! Welcome to your contact manager.
					</p>
				)}

				<div className='contact-manager-container'>
					<div className='contact-form'>
						<ContactForm />
					</div>
					<div className='contacts-container'>
						<ContactFilter />
						<Contacts />
					</div>
				</div>
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
