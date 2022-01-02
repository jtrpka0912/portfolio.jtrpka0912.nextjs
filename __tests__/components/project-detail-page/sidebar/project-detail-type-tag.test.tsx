import { render, screen } from "@testing-library/react";

import ProjectDetailTypeTag from "../../../../components/project-detail-page/sidebar/project-detail-type-tag";

import { ProjectType } from "../../../../models/project";

describe('Render the component', () => {
    test('A front-end project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.FRONTEND } />);

        const tagElement = screen.getByText(/Frontend/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });

    test('A back-end project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.BACKEND } />);

        const tagElement = screen.getByText(/Backend/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });

    test('A fullstack project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.FULLSTACK } />);

        const tagElement = screen.getByText(/Fullstack/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });
});