import { render, screen } from "@testing-library/react";

import ProjectDetailSidebarRepo from "../../../../../components/project-detail-page/sidebar/project-detail-repo/project-detail-repo";

describe('Render the component', () => {
    it('Nothing to render with no repo', () => {
        render(<ProjectDetailSidebarRepo repo={ undefined } />);

        const element = screen.queryByRole('note');

        expect(element).not.toBeInTheDocument();
    });

    it('Render the container at least with one repo', () => {
        render(<ProjectDetailSidebarRepo repo={{
            gitlab: 'path/to/repo'
        }} />);

        const element = screen.queryByRole('note');

        expect(element).toBeInTheDocument();
    });
});