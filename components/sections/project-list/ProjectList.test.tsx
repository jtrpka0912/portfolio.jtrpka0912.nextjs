import { render, screen } from '@testing-library/react';
import ProjectList from './ProjectList';

import { projectFour, projectOne, projectThree, projectTwo } from '../../../__tests__/examples/projects';

describe('Without projects', () => {
	test('Render component without any projects', () => {
		// Arrange
		render(<ProjectList projects={[]} />);

		const emptyComponent = screen.getByText('Unable to find any projects.');

		// Assert
		expect(emptyComponent).toBeInTheDocument();
	});
});

describe('With projects', () => {
	beforeEach(() => {
		render(<ProjectList projects={[
			projectOne,
			projectTwo,
			projectThree,
			projectFour
		]} />);
	});

	test('Render component with projects', () => {
		const thumbnails = screen.getAllByRole('listitem');

		expect(thumbnails).toHaveLength(4);
	})
});