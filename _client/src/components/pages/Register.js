import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../_actions/alert';
import { register } from '../../_actions/auth';
import PropTypes from 'prop-types';

const Register = ({ isAuthenticated, setAlert, register, history }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		if (password !== password2) {
			setAlert(`Passwords doesn't match!`, 'danger');
			setFormData({ ...formData, password: '', password2: '' });
		} else {
			register(name, email, password, history);
		}

		e.preventDefault();
	};

	if (isAuthenticated) {
		return <Redirect to='dashboard' />;
	}

	return (
		<div className='background'>
			<div className='form-container'>
				<h1 className='name text-center'>
					<i className='fab fa-envira logo-icon'></i>
					<span className='text-main'>Mongo</span>Gin
				</h1>
				<h2 className='form-title text-center'>SIGN UP</h2>
				<form className='form' onSubmit={onSubmit}>
					<div className='form-group mt-5'>
						{/* <label htmlFor='email' className='form-label'>
							Name
						</label> */}
						<div className='input-group'>
							<input
								type='text'
								className='form-control'
								placeholder='Name'
								name='name'
								value={name}
								onChange={onChange}
							/>
							<div className='input-group-prepend auth-input-group-prepend'>
								<i className='fas fa-user-circle'></i>
							</div>
						</div>
					</div>
					<div className='form-group mt-4'>
						{/* <label htmlFor='email' className='form-label'>
							Email
						</label> */}
						<div className='input-group'>
							<input
								type='email'
								className='form-control'
								placeholder='Email'
								name='email'
								value={email}
								onChange={onChange}
							/>
							<div className='input-group-prepend auth-input-group-prepend'>
								<i className='fas fa-envelope'></i>
							</div>
						</div>
					</div>
					<div className='form-group mt-4'>
						{/* <label htmlFor='password' className='form-label'>
							Password
						</label> */}
						<div className='input-group'>
							<input
								type='password'
								className='form-control'
								placeholder='Password'
								name='password'
								value={password}
								onChange={onChange}
							/>
							<div className='input-group-prepend auth-input-group-prepend'>
								<i className='fas fa-key'></i>
							</div>
						</div>
					</div>
					<div className='form-group mt-4'>
						{/* <label htmlFor='password' className='form-label'>
							Confirm password
						</label> */}
						<div className='input-group'>
							<input
								type='password'
								className='form-control'
								placeholder='Confirm password'
								name='password2'
								value={password2}
								onChange={onChange}
							/>
							<div className='input-group-prepend auth-input-group-prepend'>
								<i className='fas fa-key'></i>
							</div>
						</div>
					</div>
					<button type='submit' className='btn btn-block'>
						REGISTER
					</button>
				</form>
				<p className='form-link'>
					Already have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(
	withRouter(Register)
);
