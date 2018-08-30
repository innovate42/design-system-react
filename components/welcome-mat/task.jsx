/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// # App Launcher Section Component

// ## Dependencies

// ### React
import React from 'react';
import createReactClass from 'create-react-class';

import PropTypes from 'prop-types';
// ### isFunction
import isFunction from 'lodash.isfunction';
// ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.
// ## Children
import Icon from '../icon';
// ## Constants
import { WELCOME_MAT_STEP } from '../../utilities/constants';

const handleClick = (event, href, onClick) => {
	event.preventDefault();
	onClick(event, { href });
};

/**
 * App Launcher Sections allow users to categorize App Tiles as well as toggle their display
 */
const WelcomeMatTask = createReactClass({
	// ### Display Name
	// Always use the canonical component name as the React display name.
	displayName: WELCOME_MAT_STEP,

	// ### Prop Types
	propTypes: {
		/**
		 * The title for this section of apps
		 */
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,

		completed: PropTypes.bool,
		icon: PropTypes.node,

		/**
		 * Function that will be executed when clicking on a tile
		 */
		onClick: PropTypes.func,
		/**
		 * The `href` attribute of the tile. Please pass in bookmarkable URLs from your routing library. If the `onClick` callback is specified this URL will be prevented from changing the browser's location.
		 */
		href: PropTypes.string,
	},

	getDefaultProps () {
		const defaultProps = {
			href: 'javascript:void(0);', // eslint-disable-line no-script-url
		};
		return defaultProps;
	},

	// add the props to the state, this way they can be overrideen
	getInitialState () {
		return {
			onClick: this.props.onClick,
			description: this.props.description,
			title: this.props.title,
			icon: this.props.icon,
			href: this.props.href,
			completed: this.props.completed,
		};
	},

	render () {
		return (
			<a
				href={this.state.href}
				className={`slds-box slds-box_link slds-box_x-small slds-media slds-welcome-mat__tile ${
					this.state.completed ? 'slds-welcome-mat__tile_complete' : ''
				}`}
				onClick={
					isFunction(this.state.onClick)
						? (event) => handleClick(event, this.state.href, this.state.onClick)
						: null
				}
			>
				<div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
					<div className="slds-welcome-mat__tile-icon-container">
						{this.state.icon}

						{this.state.completed ? (
							<Icon
								category="utility"
								name="check"
								size="xx-small"
								assistiveText="Completed"
								containerClassName="slds-icon_container slds-icon_container_circle slds-icon-action-check"
								title="Completed"
							/>
						) : (
							''
						)}
					</div>
				</div>
				<div className="slds-media__body slds-border_left slds-p-around_small">
					<h3 className="slds-welcome-mat__tile-title">{this.state.title}</h3>
					<p className="slds-welcome-mat__tile-description">
						{this.state.description}
					</p>
					{this.props.children}
				</div>
			</a>
		);
	},
});

export default WelcomeMatTask;
