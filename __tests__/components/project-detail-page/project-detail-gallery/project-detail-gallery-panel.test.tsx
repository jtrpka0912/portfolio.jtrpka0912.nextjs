import { render, screen } from '@testing-library/react';

import { GalleryTabs } from '../../../../models/enums/GalleryTabs';

import ProjectDetailGalleryPanel from '../../../../components/project-detail-page/project-detail-gallery/project-detail-gallery-panel';

describe('Render the component', () => {
    it('Render the component', () => {
        render(<ProjectDetailGalleryPanel 
            gallery={{
                desktop: ['1'],
                tablet: ['1'],
                mobile: ['1'],
            }} 
            active={ GalleryTabs.Desktop } 
        />);

        const tabPanel = screen.getByRole('tabpanel');

        expect(tabPanel).toBeInTheDocument();
    });
});