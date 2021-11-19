import { render, screen } from '@testing-library/react';

import ProjectDetailGalleryTabs from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-tabs';

describe('Render component', () => {
    test('Render the tab component', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        expect(renderedElement).toBeInTheDocument();
    });
});

describe('Render the tabs', () => {
    test('Render all three', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1'],
            tablet: ['1'],
            mobile: ['1']
        }} />)

        // Act
        const tabs = screen.getAllByRole('tab');

        // Assert
        expect(tabs.length).toBe(3);
    });
});