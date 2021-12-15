import { render, screen } from '@testing-library/react';

import { projectFour, projectOne, projectThree, projectTwo } from '../../../examples/projects';

import ProjectList from '../../../../components/sections/project-list/project-list';

describe('Without projects', () => {
    test('Render component without any projects', () => {
        // Arrange
        render(<ProjectList projects={ [] } />);

        const emptyComponent = screen.getByText('Unable to find any projects.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});

describe('With projects', () => {
    beforeEach(() => {
        render(<ProjectList projects={ [
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ] } />);
    });

    test('Render component with projects', () => {
        const thumbnails = screen.getAllByRole('listitem');

        expect(thumbnails).toHaveLength(4);
    })
});