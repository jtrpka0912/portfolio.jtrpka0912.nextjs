import { ByRoleOptions, render, screen } from '@testing-library/react';
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

describe('All Projects Link', () => {
	test('Render the show all projects link', () => {
		// Arrange
		render(<ProjectList showAll projects={[
			projectOne,
			projectTwo,
			projectThree,
			projectFour
		]} />);

		const linkElement = screen.getByRole('link', {
			name: 'Show All Projects'
		});

		// Assert
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveTextContent('Show All Projects');
	});

	test('Do not render the show all projects link', () => {
		// Arrange
		render(<ProjectList projects={[
			projectOne,
			projectTwo,
			projectThree,
			projectFour
		]} />);

		const linkElement = screen.queryByRole('link', {
			name: 'Show All Projects'
		});

		// Assert
		expect(linkElement).not.toBeInTheDocument();
	});

	test('Do not render the show all projects link if no projects', () => {
		// Arrange
		render(<ProjectList showAll projects={[]} />);

		const linkElement = screen.queryByRole('link', {
			name: 'Show All Projects'
		});

		// Assert
		expect(linkElement).not.toBeInTheDocument();
	});
});