import { render, screen } from "@testing-library/react";

import SearchButton from "../../../../components/sections/search/search-button";

describe('Search button query link', () => {
    test('Search by just query', () => {
        // Arrange
        render(<SearchButton query="Portfolio" />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', expect.stringContaining('?query=Portfolio'));
    });
});