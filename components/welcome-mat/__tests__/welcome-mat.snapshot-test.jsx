import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeMat_ToDo from '../__examples__/todo';
import WelcomeMat_Completed from '../__examples__/completed';
import WelcomeMat_InProgress from '../__examples__/inprogress';

describe('WelcomeMat Render', () => {

	it('ToDo looks correct', () => {
		const tree = renderer
			.create(WelcomeMat_ToDo)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});


	it('InProgress looks correct', () => {
		const tree = renderer
			.create(WelcomeMat_InProgress)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});


	it('Completed looks correct', () => {
		const tree = renderer
			.create(WelcomeMat_Completed)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

