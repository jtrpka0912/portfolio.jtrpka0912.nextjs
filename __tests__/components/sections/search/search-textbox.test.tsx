import { render, screen } from "@testing-library/react";

import SearchTextbox from "../../../../components/sections/search/search-textbox";

describe('Render the textbox', () => {
    test('Render the textbox', () => {
        // Arrange
        render(<SearchTextbox />);

        const textboxElement = screen.getByRole('textbox');

        // Assert
        expect(textboxElement).toBeInTheDocument();
    });
});