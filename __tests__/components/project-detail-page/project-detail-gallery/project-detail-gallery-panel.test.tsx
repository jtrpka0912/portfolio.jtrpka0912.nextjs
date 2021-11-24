import { render, screen } from '@testing-library/react';

import { GalleryTabs } from '../../../../models/enums/GalleryTabs';

import ProjectDetailGalleryPanel from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-panel';

describe('Render the component', () => {
    it('Render the component', () => {
        render(<ProjectDetailGalleryPanel 
            gallery={{
                desktop: [{ image: '1', altText: 'Alt 1' }],
                tablet: [{ image: '1', altText: 'Alt 1' }],
                mobile: [{ image: '1', altText: 'Alt 1' }],
            }} 
            active={ GalleryTabs.Desktop } 
        />);

        const tabPanel = screen.getByRole('tabpanel');

        // Assert
        expect(tabPanel).toBeInTheDocument();
    });
});

describe('Thumbnail count', () => {
    it('Count the number of desktop thumbnails', () => {
        // Arrange
        render(<ProjectDetailGalleryPanel 
            active={ GalleryTabs.Desktop }
            gallery={{
                desktop: [
                    { image: '1', altText: 'Alt 1' },
                    { image: '2', altText: 'Alt 2' },
                    { image: '3', altText: 'Alt 3' }
                ],
                tablet: [
                    { image: '1', altText: 'Alt 1' },
                    { image: '2', altText: 'Alt 2' }
                ],
                mobile: [
                    { image: '1', altText: 'Alt 1' }
                ]
            }}
        />);

        const thumbnailElements = screen.getAllByRole('link');

        // Assert
        expect(thumbnailElements).toHaveLength(3);
    })
})