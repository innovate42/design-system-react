import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeMatToDo from '../__examples__/todo';
import WelcomeMatCompleted from '../__examples__/completed';
import WelcomeMatInProgress from '../__examples__/inprogress';

describe('WelcomeMat Render', () => {
	it('ToDo looks correct', () => {
		const tree = renderer.create(WelcomeMatToDo).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('InProgress looks correct', () => {
		const tree = renderer.create(WelcomeMatInProgress).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Completed looks correct', () => {
		const tree = renderer.create(WelcomeMatCompleted).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
