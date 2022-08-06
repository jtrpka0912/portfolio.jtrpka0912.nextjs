import { render, screen } from '@testing-library/react';

import ProjectDetailGallery from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery';

// TODO: Need to do better tests.

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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
            ],
            tablet: [
                { image: { altText: 'Alt 4', path: '/path/to/starvation.bmp' } }
            ],
            mobile: [
                { image: { altText: 'Alt 5', path: '/path/to/preservation.tiff' } },
                { image: { altText: 'Alt 6', path: '/path/to/preservation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
            ],
            tablet: [
                { image: { altText: 'Alt 5', path: '/path/to/preservation.tiff' } },
                { image: { altText: 'Alt 6', path: '/path/to/preservation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
            ],
            mobile: [
                { image: { altText: 'Alt 5', path: '/path/to/preservation.tiff' } },
                { image: { altText: 'Alt 6', path: '/path/to/preservation.tiff' } }
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
                { image: { altText: 'Alt 1', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 2', path: '/path/to/salvation.tiff' } },
                { image: { altText: 'Alt 3', path: '/path/to/salvation.tiff' } }
        ],
            mobile: [
                { image: { altText: 'Alt 5', path: '/path/to/preservation.tiff' } },
                { image: { altText: 'Alt 6', path: '/path/to/preservation.tiff' } }
            ]
        }} />);

        const renderedElement = screen.getByRole('tablist');

        // Assert
        expect(renderedElement).toBeInTheDocument();
    });
});