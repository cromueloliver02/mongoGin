import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	addContact,
	updateContact,
	clearCurrent
} from '../../_actions/contact';
import { setAlert } from '../../_actions/alert';
import PropTypes from 'prop-types';

const ContactForm = ({
	current,
	addContact,
	updateContact,
	clearCurrent,
	setAlert
}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		type: 'personal'
	});
	const { name, email, phone, address, type } = formData;

	useEffect(() => {
		if (current) {
			setFormData({
				name: current.name ? current.name : '',
				email: current.email ? current.email : '',
				phone: current.phone ? current.phone : '',
				address: current.address ? current.address : '',
				type: current.type ? current.type : ''
			});
		} else {
			setFormData({
				name: '',
				email: '',
				phone: '',
				address: '',
				type: 'personal'
			});
		}
	}, [current]);

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		if (name === '' || email === '' || phone === '' || type === '') {
			setAlert('Please enter all required information', 'danger');
		} else {
			const contactFields = {};
			if (current) contactFields.id = current._id;
			if (name) contactFields.name = name;
			if (email) contactFields.email = email;
			if (phone) contactFields.phone = phone;
			if (address) contactFields.address = address;
			if (type) contactFields.type = type;

			if (current) {
				updateContact(contactFields);
				// setAlert('Contact updated', 'success');
			} else {
				addContact(contactFields);
				// setAlert('Contact added', 'success');
			}

			setFormData({
				name: '',
				email: '',
				phone: '',
				address: '',
				type: 'personal'
			});
		}

		e.preventDefault();
	};

	const onClear = () => {
		setFormData({
			name: '',
			email: '',
			phone: '',
			address: '',
			type: 'personal'
		});

		clearCurrent();
	};

	return (
		<Fragment>
			<h3 className='mb-3'>{current ? 'Edit' : 'Add'} Contact</h3>
			<form className='form' onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<div className='input-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter name...'
							name='name'
							value={name}
							onChange={e => onChange(e)}
						/>
						<div className='input-group-prepend'>
							<i className='fas fa-user'></i>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<div className='input-group'>
						<input
							type='email'
							className='form-control'
							placeholder='Enter email...'
							name='email'
							value={email}
							onChange={e => onChange(e)}
						/>
						<div className='input-group-prepend'>
							<i className='fas fa-envelope'></i>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='phone' className='form-label'>
						Phone
					</label>
					<div className='input-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter phone number...'
							name='phone'
							value={phone}
							onChange={e => onChange(e)}
						/>
						<div className='input-group-prepend'>
							<i className='fas fa-phone-alt'></i>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='phone' className='form-label'>
						Address
					</label>
					<div className='input-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter address...'
							name='address'
							value={address}
							onChange={e => onChange(e)}
						/>
						<div className='input-group-prepend'>
							<i className='fas fa-map-marker-alt'></i>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='type' className='form-label'>
						Type
					</label>
					<div className='check-group'>
						<div className='type-container'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									id='personal'
									name='type'
									checked={type === 'personal'}
									value='personal'
									onChange={onChange}
								/>{' '}
								<label className='form-check-label' htmlFor='personal'>
									Personal
								</label>
							</div>
							<div className='form-check ml-5'>
								<input
									className='form-check-input'
									type='radio'
									id='professional'
									name='type'
									checked={type === 'professional'}
									value='professional'
									onChange={onChange}
								/>{' '}
								<label
									className='form-check-label'
									htmlFor='professional'
								>
									Professional
								</label>
							</div>
						</div>
						<div className='check-group-prepend'>
							<i className='fas fa-user-tie'></i>
						</div>
					</div>
				</div>
				<button type='submit' className='btn btn-block'>
					{current ? 'Update' : 'Add'} Contact
				</button>
			</form>
			{current && (
				<button className='btn btn-block btn-danger mt-2' onClick={onClear}>
					Cancel
				</button>
			)}
		</Fragment>
	);
};

ContactForm.addContact = {
	addContact: PropTypes.func.isRequired,
	updateContact: PropTypes.func.isRequired,
	clearCurrent: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
	current: PropTypes.object
};

const mapStateToProps = state => ({
	current: state.contact.current
});

export default connect(mapStateToProps, {
	addContact,
	updateContact,
	clearCurrent,
	setAlert
})(ContactForm);
