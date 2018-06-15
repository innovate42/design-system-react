import React from 'react';
import createReactClass from 'create-react-class';
import { action } from '@storybook/addon-actions';

import WelcomeMat from '../../welcome-mat';
import Icon from '../../icon';
import Task from '../task';

const inProgress = [
	<Task
		key={1}
		title="Welcome to Salesforce!"
		description="Lorem ipsum dolor sit amet,lorem ipsum dolor sit amet."
		completed
		icon={<Icon category="utility" name="animal_and_nature" size="small" />}
		onClick={action('Tasks clicked!')}
	/>,

	<Task
		key={2}
		title="Learn About OpenCTI"
		description="Lorem ipsum dolor sit amet,lorem ipsum dolor sit amet."
		completed
		icon={<Icon category="utility" name="call" size="small" />}
		onClick={action('Tasks clicked!')}
	/>,

	<Task
		key={3}
		title="Power Up the Utility Bar"
		description="Tap into case history or share
												notes with fellow agents—it all happens on the utility bar."
		icon={<Icon category="utility" name="upload" size="small" />}
		onClick={action('Tasks clicked!')}
	/>,
];


const DemoWelcomeMat = createReactClass({
	displayName: 'DemoWelcomeMat',


	render() {
		return (
			<WelcomeMat
				title="The Lightning Experience is here!"
				description="Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes."
				tasks={this.props.tasks}
			/>


		);
	},
});

export default <DemoWelcomeMat tasks={inProgress} />;
