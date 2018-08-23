import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ title }) => (
	<div className="Text-center">
		<img className="Logo" src="./assets/i42.png" alt="logo" />
		<h1 className="h3"> {title} </h1>
	</div>);

// Welcome.propsType = {
// 	title: PropTypes.string.isRequired
// };

export default Welcome;
