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
        checkTab(desktopTab, 'desktop');
    });

    test('Render tablet tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            tablet: ['1'],
        }} />);

        const tabs = screen.getAllByRole('tab');
        const tabletTab = tabs[0];

        // Assert
        expect(tabs.length).toBe(1);
        checkTab(tabletTab, 'tablet-alt');
    });

    test('Render mobile tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            mobile: ['1'],
        }} />);

        const tabs = screen.getAllByRole('tab');
        const mobileTab = tabs[0];

        // Assert
        expect(tabs.length).toBe(1);
        checkTab(mobileTab, 'mobile-alt');
    });

    test('Render desktop and tablet tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1'],
            tablet: ['1']
        }} />);

        const tabs = screen.getAllByRole('tab');
        const desktopTab = tabs[0];
        const tabletTab = tabs[1];

        // Assert
        expect(tabs.length).toBe(2);
        checkTab(desktopTab, 'desktop');
        checkTab(tabletTab, 'tablet-alt');
    });

    test('Render desktop and mobile tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            desktop: ['1'],
            mobile: ['1']
        }} />);

        const tabs = screen.getAllByRole('tab');
        const desktopTab = tabs[0];
        const mobileTab = tabs[1];

        // Assert
        expect(tabs.length).toBe(2);
        checkTab(desktopTab, 'desktop');
        checkTab(mobileTab, 'mobile-alt');
    });

    test('Render tablet and mobile tab', () => {
        // Arrange
        render(<ProjectDetailGalleryTabs gallery={{
            tablet: ['1'],
            mobile: ['1']
        }} />);

        const tabs = screen.getAllByRole('tab');
        const tabletTab = tabs[0];
        const mobileTab = tabs[1];

        // Assert
        expect(tabs.length).toBe(2);
        checkTab(tabletTab, 'tablet-alt');
        checkTab(mobileTab, 'mobile-alt');
    });
});

/**
 * @function checkTab
 * @description Check if the tab is in the document and has the correct icon.
 * @author J. Trpka
 * @param { HTMLElement } tab 
 * @param { string } icon 
 */
const checkTab = (tab: HTMLElement, icon: string) => {
    expect(tab).toBeInTheDocument();
    expect(tab.querySelector('svg')?.dataset.icon).toBe(icon);
}