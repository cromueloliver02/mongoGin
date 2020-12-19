import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, setCurrent } from '../../_actions/contact';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, deleteContact, setCurrent }) => {
	const { _id, name, email, phone, address, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
	};

	return (
		<div className='contact-item mb-3'>
			<div className='d-flex justify-content-between mb-3'>
				{name && (
					<span>
						<i className='fas fa-user mr-2'></i>
						<strong>{name}</strong>
					</span>
				)}
				{address ? (
					<span>
						<i className='fas fa-map-marker-alt mr-2'></i>
						{address}
					</span>
				) : (
					<span>
						<i className='fas fa-user-tie mr-2'></i>
						<span className={`contact-type type-${type}`}>{type}</span>
					</span>
				)}
			</div>
			<div className='d-flex justify-content-between mb-3'>
				{email && (
					<span>
						<i className='fas fa-envelope mr-2'></i>
						{email}
					</span>
				)}
				{address && (
					<span>
						<i className='fas fa-user-tie mr-2'></i>
						<span className={`contact-type type-${type}`}>{type}</span>
					</span>
				)}
			</div>
			{phone && (
				<p className='mb-0'>
					<i className='fas fa-phone-alt mr-2'></i>
					{phone}
				</p>
			)}
			<div className='contact-btn-group'>
				<button className='btn btn-sm' onClick={() => setCurrent(contact)}>
					Edit
				</button>
				<button className='btn btn-sm btn-danger ml-1' onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContact: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteContact, setCurrent })(ContactItem);
