import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Input,
	Button,
	Checkbox,
	Spinner } from '../';
import Welcome from './welcome';
import { validateEmail, validatePassword } from './validation';
import './login.css';

console.log('LOADING....');
class Login extends Component {
	constructor (props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {
				email: '',
				password: ''
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	// Set the state, based on the id of the component calling the handler
	handleChange (event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit () {
		const { email, password } = this.state;
		const errors = this.state.errors;
		errors.email = validateEmail(email);
		errors.password = validatePassword(password);

		this.setState({ errors }, () => {
			if (!this.state.errors.email && !this.state.errors.password) {
				this.props.onSubmit(email, password);
			}
		});
	}

	render () {
		console.log('RENDERING.....');
		return (
			<div className="Login">
				<Welcome title="Innovate42 Hub" />
				<form className="LoginForm" onSubmit={this.handleSubmit} >
					<label>Email</label>
					<Input
						id="email"
						type="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
						errorText={this.state.errors.email}
					/>
					<label>Password</label>
					<Input
						id="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
						type="password"
						errorText={this.state.errors.password}
					/>
				</form>
				<Checkbox
					className="Remember-checkbox"
					assistiveText={{
						label: 'Remember me',
					}}
					labels={{
						label: 'Remember me',
					}}
				/>
				{this.props.isLoading && <Spinner />}
				<Button
					className="Submit-button"
					label="Sign in"
					variant="brand"
					onClick={this.handleSubmit}
				/>
			</div>
		);
	}
}


// Login.propTypes = {
// 	// what to call when the user clicks submit.  Invoked with user, pass
// 	onSubmit: PropTypes.func.isRequired,

// 	// flag to indicate that the login in being processed
// 	isLoading: PropTypes.bool,

// 	// flag to indicate that the user has logged in (although you probably want to trigger a navigation away from the page)
// 	isLoggedIn: PropTypes.bool,
// };


export default Login;
