import { render, screen } from '@testing-library/react';

import { GalleryTabs } from '../../../../models/enums/GalleryTabs';

import ProjectDetailGalleryPanel from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-panel';

describe('Render the component', () => {
  it('Render the component', () => {
    render(<ProjectDetailGalleryPanel
      gallery={{
        desktop: [{ image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } }],
        tablet: [{ image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } }],
        mobile: [{ image: { path: '/path/to/image.jpg', altText: 'Gallery Image 3' } }],
      }}
      active={GalleryTabs.Desktop}
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
      active={GalleryTabs.Desktop}
      gallery={{
        desktop: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 3' } }
        ],
        tablet: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } }
        ],
        mobile: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } }
        ]
      }}
    />);

    const thumbnailElements = screen.getAllByRole('link');

    // Assert
    expect(thumbnailElements).toHaveLength(3);
  });

  it('Count the number of tablet thumbnails', () => {
    // Arrange
    render(<ProjectDetailGalleryPanel
      active={GalleryTabs.Tablet}
      gallery={{
        desktop: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 3' } }
        ],
        tablet: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } }
        ],
        mobile: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } }
        ]
      }}
    />);

    const thumbnailElements = screen.getAllByRole('link');

    // Assert
    expect(thumbnailElements).toHaveLength(2);
  });

  it('Count the number of mobile thumbnails', () => {
    // Arrange
    render(<ProjectDetailGalleryPanel
      active={GalleryTabs.Mobile}
      gallery={{
        desktop: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 3' } }
        ],
        tablet: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } },
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 2' } }
        ],
        mobile: [
          { image: { path: '/path/to/image.jpg', altText: 'Gallery Image 1' } }
        ]
      }}
    />);

    const thumbnailElements = screen.getAllByRole('link');

    // Assert
    expect(thumbnailElements).toHaveLength(1);
  });
})