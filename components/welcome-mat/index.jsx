/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// # App Launcher Component

// Based on SLDS v2.1.0-rc.2

// ## Dependencies

// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
// ### classNames
// ### isFunction
import isFunction from 'lodash.isfunction';
// This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)
import checkProps from './check-props';
// ## Children
import Button from '../button';




// ## Constants
import { WELCOME_MAT } from '../../utilities/constants';


const defaultProps = {
	assistiveText: {
		trigger: 'Open App Launcher',
	},
	title: 'App Launcher',
};

const WelcomeProgress = createReactClass({
	displayName: 'Welcome Progress',

	// ### Prop Types
	propTypes: {
		/**
		 * the list of tasks
		 */
		tasks: PropTypes.array.isRequired,
	},

	getDefaultProps () {
		return defaultProps;
	},

	getInitialState () {
		return {
			isOpen: false,
		};
	},

	componentWillMount () {
		// `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
		checkProps('Welcome Progress', this.props);
	},

	render() {

		const tasks = Array.isArray(this.props.tasks) ? this.props.tasks : [];
		const completedTasks = tasks.filter((cmp) => cmp.props.completed === true);


		const completedPercentage = Math.trunc(tasks.length ? (completedTasks.length / tasks.length) * 100 : 0);

		return (
			<div>
				<div className="slds-welcome-mat__info-progress">
					<p>
						<strong>{completedTasks.length}/{tasks.length} tasks completed</strong>
					</p>
				</div>

				<div
					className="slds-progress-bar slds-progress-bar_circular"
					aria-valuemin="0"
					aria-valuemax="100"
					aria-valuenow="40"
					role="progressbar"
				>
					<span className="slds-progress-bar__value" style={{ width: `${completedPercentage}%` }}>
					<span className="slds-assistive-text">Progress: {completedPercentage}%</span>
					</span>
				</div>
			</div>
		);

	}
})

/**
 * The App Launcher allows the user to quickly access all the apps and functionality with their organization.
 * The App Launcher should generally only be used as a sub-component of the [Global Navigation Bar](/components/global-navigation-bar)
 *
 * Also note: App Launcher is not included in the standard component export. To import it, you must reference it directly via its path.
 * Example:
 * ```
 * import AppLauncher from 'design-system-react/components/app-launcher';
 * import AppLauncherTile from 'design-system-react/components/app-launcher/tile';
 * import AppLauncherSection from 'design-system-react/components/app-launcher/section';
 * ```
 *
 * USAGE EXAMPLE:
 * ```
 * <AppLauncher>
 *    <AppLauncherSection>
 *        <AppLauncherTile />
 *        <AppLauncherTile />
 *        <AppLauncherTile />
 *    </AppLauncherSection>
 *    <AppLauncherSection>
 *        <AppLauncherTile />
 *        <AppLauncherTile />
 *    </AppLauncherSection>
 * </AppLauncher>
 * ```
 *
 * By default, `Modal`, a child component of App Launcher, will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies. To prevent this you can add the following to your application with `#mount` being the root node of your application that you would like to hide from assistive technologies when the `Modal` is open.
 * ```
 * import settings from 'design-system-react/components/settings';
 * settings.setAppElement('#mount');
 * ```
 */
const WelcomeMat = createReactClass({
	// ### Display Name
	// Always use the canonical component name as the React display name.
	displayName: WELCOME_MAT,

	// ### Prop Types
	propTypes: {
		/**
		 * The list of tasks to complete
		 */
		tasks: PropTypes.array.isRequired,
		/**
		 * The welcome mat title
		 */
		title: PropTypes.string,
		/**
		 * The description
		 */
		description: PropTypes.string,
	},

	getDefaultProps () {
		return defaultProps;
	},

	componentWillMount () {
		// `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
		checkProps(WELCOME_MAT, this.props);
	},

	render () {
		const WelcomeMessage = (
			<div className="slds-welcome-mat__info-content">
				<h2 id="welcome-mat-13-label" className="slds-welcome-mat__info-title">The Lightning
					Experience is here!
				</h2>
				<div className="slds-welcome-mat__info-description slds-text-longform">
					<p>Welcome to Lightning Experience, the modern, beautiful user experience from
						Salesforce. With a sales-and service-centric mindset, we focused on
						reinventing the desktop environment to better support your business
						processes.
					</p>
				</div>

				<WelcomeProgress tasks={this.props.tasks} />

			</div>
		);


		return (
			<div className="demo-only">
				<section
					role="dialog"
					tabIndex="-1"
					className="slds-modal slds-fade-in-open slds-welcome-mat"
					aria-labelledby="welcome-mat-13-label"
					aria-describedby="welcome-mat-13-content"
					aria-modal="true"
				>
					<div className="slds-modal__container">
						<header className="slds-modal__header slds-modal__header_empty">
							<Button
								assistiveText="Close"
								iconCategory="custom"
								iconName="close"
								iconSize="large"
								iconVariant="bare"
								variant="icon"
							/>
						</header>
						<div
							className="slds-modal__content slds-welcome-mat__content slds-grid"
							id="welcome-mat-13-content"
						>
							<div className="slds-welcome-mat__info slds-size_1-of-2">
								{WelcomeMessage}
							</div>
							<div className="slds-welcome-mat__tiles slds-size_1-of-2 slds-p-around_medium">
								{this.props.tasks}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	},
});

export default WelcomeMat;
