import { render, screen } from "@testing-library/react";

import TechnologyListItem from "../../../../components/sections/technology-list/technology-list-item";

import { angularTechnology } from "../../../examples/technologies";

describe('Render the component', () => {
    test('Render a technology item', () => {
        // Arrange
        render(<TechnologyListItem technology={angularTechnology} />);

        const technologyElement = screen.getByRole('link');

        // Assert
        expect(technologyElement).toBeInTheDocument();
    });
});