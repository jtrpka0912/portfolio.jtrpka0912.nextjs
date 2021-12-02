import { render, screen } from '@testing-library/react';

import ProjectList from '../../../../components/projects-page/project-list/project-list';

describe('Without projects', () => {
    test('Render component without any projects', () => {
        // Arrange
        render(<ProjectList projects={ [] } />);

        const emptyComponent = screen.getByText('Unable to find any projects.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});