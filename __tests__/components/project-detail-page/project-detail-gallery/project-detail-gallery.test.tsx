import { render, screen } from '@testing-library/react';

import ProjectDetailGallery from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery';

describe('Without gallery', () => {
    test('Render component without gallery', () => {
        // Arrange
        render(<ProjectDetailGallery />);

        const emptyComponent = screen.getByText('There are no images in the gallery.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});

describe('With gallery', () => {
    test('All size galleries', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ],
            tablet: [
                { image: '1', altText: 'Alt 1' }
            ],
            mobile: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just desktop', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just tablet', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            tablet: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Just mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            mobile: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Desktop and tablet', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ],
            tablet: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Desktop and mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            desktop: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
            ],
            mobile: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });

    test('Tablet and mobile', () => {
        // Arrange
        render(<ProjectDetailGallery gallery={{
            tablet: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' },
                { image: '3', altText: 'Alt 3' }
        ],
            mobile: [
                { image: '1', altText: 'Alt 1' },
                { image: '2', altText: 'Alt 2' }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });
});