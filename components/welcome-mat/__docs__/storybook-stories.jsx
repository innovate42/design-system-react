import React from 'react';
import { storiesOf } from '@storybook/react';

import { WELCOME_MAT } from '../../../utilities/constants';

import IconSettings from '../../icon-settings';

import WelcomeMatToDo from '../__examples__/todo';
import WelcomeMatCompleted from '../__examples__/completed';
import WelcomeMatInProgress from '../__examples__/inprogress';

storiesOf(WELCOME_MAT, module)
	.addDecorator((getStory) => (
		<div className="slds-p-around--medium">
			<IconSettings iconPath="/assets/icons">{getStory()}</IconSettings>
		</div>
	))
	.add('App Launcher (in progress)', () => WelcomeMatInProgress)
	.add('App Launcher (completed)', () => WelcomeMatCompleted)
	.add('App Launcher', () => WelcomeMatToDo);
