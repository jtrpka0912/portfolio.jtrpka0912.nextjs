import { render, screen, getByRole } from '@testing-library/react';

import ProjectDetailGalleryTabs from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-tabs';

describe('Render component', () => {
    test('Render the tab component', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1']
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
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
        }} />);

        const tabs = screen.getAllByRole('tab');

        // Assert
        expect(tabs.length).toBe(3);
    });

    test('Render desktop tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1'],
        }} />);

        const tabs = screen.getAllByRole('tab');
        const desktopTab = tabs[0];

        // Assert
        expect(tabs.length).toBe(1);
        expect(desktopTab).toBeInTheDocument();
        expect(desktopTab.querySelector('svg')?.dataset.icon).toBe('desktop');
    });
});