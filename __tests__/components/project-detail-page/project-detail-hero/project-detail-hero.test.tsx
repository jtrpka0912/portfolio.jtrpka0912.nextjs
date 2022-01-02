import { render, screen } from "@testing-library/react";

import ProjectDetailHero from "../../../../components/project-detail-page/project-detail-hero/project-detail-hero";

import { projectOne } from '../../../examples/projects';

describe('Render the component', () => {
    test('Retrieve component by title', () => {
        // Arrange
        render(<ProjectDetailHero project={ projectOne } />);

        const heroTitleElement = screen.getByText('Project 1');

        // Assert
        expect(heroTitleElement).toBeInTheDocument();
    });
});