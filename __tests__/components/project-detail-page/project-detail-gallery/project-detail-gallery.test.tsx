import { render, screen } from '@testing-library/react';

import ProjectDetailGallery from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery';

describe('Without gallery', () => {
    test('Render component without gallery', () => {
        // Arrange
        render(<ProjectDetailGallery />);

        // Act
        const emptyComponent = screen.getByText('There are no images in the gallery.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});

describe('With gallery', () => {
    test('All size galleries', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: ['1', '2', '3'],
            tablet: ['1'],
            mobile: ['1', '2']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just desktop', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: ['1', '2', '3']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just tablet', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            tablet: ['1', '2', '3']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            mobile: ['1', '2', '3']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Desktop and tablet', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: ['1', '2', '3'],
            tablet: ['1', '2']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Desktop and mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: ['1', '2', '3'],
            mobile: ['1', '2']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Tablet and mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            tablet: ['1', '2', '3'],
            mobile: ['1', '2']
        }} />);

        // Act
        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });
});