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

    test('Search by just technology', () => {
        // Arrange
        render(<SearchButton technology="react" />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', expect.stringContaining('?technology=react'));
    });

    test('Search by query and technology', () => {
        // Arrange
        render(<SearchButton query="SHELF" technology="nodejs" />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', expect.stringContaining('?query=SHELF&technology=nodejs'));
    });

    test('No query and technology', () => {
        // Arrange
        render(<SearchButton />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', '/search');
    });
});