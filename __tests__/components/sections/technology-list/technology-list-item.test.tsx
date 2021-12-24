import { render, screen } from "@testing-library/react";

import TechnologyListItem from "../../../../components/sections/technology-list/technology-list-item";

describe('Render the component', () => {
    test('Render a technology item', () => {
        // Arrange
        render(<TechnologyListItem technology={{
            slug: 'nodejs',
            title: 'NodeJS',
            url: 'https://www.nodejs.org',
            logo: '/path/to/logo.png'
        }} />);

        const technologyElement = screen.getByRole('link');

        // Assert
        expect(technologyElement).toBeInTheDocument();
    });
});