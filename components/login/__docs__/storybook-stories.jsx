import React from 'react';
import { storiesOf } from '@storybook/react';

import { LOGIN } from '../../../utilities/constants';

import IconSettings from '../../icon-settings';

import Login from '../index';

storiesOf(LOGIN, module)
	.addDecorator((getStory) => (
		<div className="slds-p-around--medium">
			<IconSettings iconPath="/assets/icons">{getStory()}</IconSettings>
		</div>
	))
	.add('App Login examples', () => <Login />);

