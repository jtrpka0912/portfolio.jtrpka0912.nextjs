import { render, screen } from '@testing-library/react';

import ProjectDetailGallery from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery';

describe('Render component', () => {
    test('Render component with gallery', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: ['1', '2', '3'],
            tablet: ['1'],
            mobile: ['1', '2']
        }} />);

        // Act
        const renderedElement = screen.getByText('Render Gallery');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Render component without gallery', () => {
        // Arrange
        render(<ProjectDetailGallery />);

        // Act
        const emptyComponent = screen.getByText('There are no images in the gallery.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
})