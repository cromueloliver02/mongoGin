import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../_actions/auth';
import PropTypes from 'prop-types';

const Login = ({ isAuthenticated, login }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		login(email, password);

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
				<h2 className='form-title text-center'>SIGN IN</h2>
				<form className='form' onSubmit={onSubmit}>
					<div className='form-group mt-5'>
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
					<button type='submit' className='btn btn-block'>
						LOGIN
					</button>
				</form>
				<p className='form-link'>
					Don't have an account yet? <Link to='/register'>Register</Link>
				</p>
			</div>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
