import { render, screen } from "@testing-library/react";

import SearchTextbox from "../../../../components/sections/search/search-textbox";

const onChangeMock = jest.fn();

describe('Render the textbox', () => {
    test('Render the textbox', () => {
        // Arrange
        render(<SearchTextbox onChange={ onChangeMock } />);

        const textboxElement = screen.getByRole('textbox');

        // Assert
        expect(textboxElement).toBeInTheDocument();
    });
});