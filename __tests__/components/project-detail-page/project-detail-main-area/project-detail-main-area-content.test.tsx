import { render, screen } from "@testing-library/react";

import { projectOne } from "../../../examples/projects";

import ProjectDetailMainAreaContent from "../../../../components/project-detail-page/project-detail-main-area/project-detail-main-area-content";

describe('Render the component', () => {
    beforeEach(() => {
        render(<ProjectDetailMainAreaContent project={
            projectOne
        } />);
    });

    test('Render the main content', () => {
        const contentText = screen.getByText('Foobar');

        expect(contentText).toBeInTheDocument();
    })
});