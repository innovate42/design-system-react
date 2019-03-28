import React from 'react';
import PropTypes from 'prop-types';
import i42logo from '../../assets/images/i42.png';

const Welcome = ({ title }) => (
	<div className="Text-center">
		<img className="Logo" src={i42logo} alt="logo" />
		<h1 className="h3"> {title} </h1>
	</div>
);

Welcome.propsType = {
	title: PropTypes.string.isRequired,
};

export default Welcome;
