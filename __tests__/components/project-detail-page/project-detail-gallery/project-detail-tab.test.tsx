import { render, screen } from '@testing-library/react';

import ProjectDetailGalleryTab from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-tab';

describe('Render component', () => {
    test('Render the tab component', () => {
        // Arrange
        render(<ProjectDetailGalleryTab />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        expect(renderedElement).toBeInTheDocument();
    })
})