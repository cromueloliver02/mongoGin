import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../_actions/auth';
import { removeModal } from '../../_actions/alert';
import PropTypes from 'prop-types';

const Modal = ({ modal, logout, removeModal }) => {
	const onLogout = () => {
		logout();
		removeModal();
	};

	return (
		modal !== null && (
			<div className='modal-overlay'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h4 className='modal-title'>{modal.title}</h4>
					</div>
					<div className='modal-body'>
						<div className='modal-icon-container'>
							<i className='fas fa-info modal-icon'></i>
						</div>
						<p className='modal-text'>{modal.msg}</p>
					</div>
					<div className='modal-footer'>
						<button
							className='btn btn-dark btn-sm'
							onClick={() => removeModal()}
						>
							No
						</button>
						<button
							className='btn btn-danger btn-sm ml-3'
							onClick={onLogout}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		)
	);
};

Modal.propTypes = {
	alert: PropTypes.object,
	logout: PropTypes.func.isRequired,
	removeModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	modal: state.alert.modal
});

export default connect(mapStateToProps, { logout, removeModal })(Modal);
