import { render, screen } from "@testing-library/react";

import ProjectDetailGithub from "../../../../../components/project-detail-page/sidebar/project-detail-repo/project-detail-github";

describe('Render the component', () => {
    it('Render the component', () => {
        // Arrange
        render(<ProjectDetailGithub github="/path/to/git/repo" />);

        const linkElement = screen.getByRole('link');

        // Assert
        expect(linkElement).toBeInTheDocument();
    });
});