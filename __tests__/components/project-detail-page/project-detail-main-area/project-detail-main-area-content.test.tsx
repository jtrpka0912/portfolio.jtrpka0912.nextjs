import { render, screen } from "@testing-library/react";

import { projectFour, projectOne } from "../../../examples/projects";

import ProjectDetailMainAreaContent from "../../../../components/project-detail-page/project-detail-main-area/project-detail-main-area-content";

describe('Render the component', () => {
    test('Render the main content', () => {
        // Arrange
        render(<ProjectDetailMainAreaContent project={
            projectOne
        } />);

        const contentText = screen.getByText('Foobar');

        // Assert
        expect(contentText).toBeInTheDocument();
    });

    test('Render the thumbnail in the content', () => {
        // Arrange
        render(<ProjectDetailMainAreaContent project={
            projectOne
        } />);

        const imageElement = screen.getByAltText('Image of Project 1');

        // Assert
        expect(imageElement).toBeInTheDocument();
    });

    test('No thumbnail to render', () => {
        // Arrange
        render(<ProjectDetailMainAreaContent project={
            projectFour // This one does not a thumbnail
        } />);

        const imageElement = screen.queryByAltText('Image of Project 4');

        // Assert
        expect(imageElement).not.toBeInTheDocument();
    });
});