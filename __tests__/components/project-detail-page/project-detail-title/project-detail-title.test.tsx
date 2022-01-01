import { render, screen } from "@testing-library/react";

import ProjectDetailTitle from "../../../../components/project-detail-page/project-detail-title/project-detail-title";

import { projectOne } from '../../../examples/projects';

describe('Render the component', () => {
    test('Retrieve component by title', () => {
        // Arrange
        render(<ProjectDetailTitle project={ projectOne } />);

        const heroTitleElement = screen.getByText('Project 1');

        // Assert
        expect(heroTitleElement).toBeInTheDocument();
    });
});