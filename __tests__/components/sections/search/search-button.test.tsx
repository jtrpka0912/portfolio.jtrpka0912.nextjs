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

    test('Search by query that has spaces', () => {
        // Arrange
        render(<SearchButton query="Movie App" />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', expect.stringContaining('?query=Movie%20App'));
    });

    test('Search by query with special characters', () => {
        // Arrange
        render(<SearchButton query="H#ll0W0r|d" />);

        const buttonElement = screen.getByRole('link');

        // Assert
        expect(buttonElement).toHaveAttribute('href', expect.stringContaining('?query=H#ll0W0r|d'));
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
        expect(buttonElement).toHaveAttribute('href', '/project/search');
    });
});