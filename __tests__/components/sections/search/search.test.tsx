import { fireEvent, render, screen } from "@testing-library/react";

import Search from "../../../../components/sections/search/search";

describe('Technology drop down component', () => {
    test('Do not render the drop down', () => {
        // Arrange
        render(<Search technologies={[]} />);

        const noDropDown = screen.queryByRole('combobox');

        // Assert
        expect(noDropDown).not.toBeInTheDocument();
    });
});

describe('Query builder', () => {
    test('Query for just the title', () => {
        // Arrange
        render(<Search technologies={[]} />);

        const searchBoxElement = screen.getByRole('textbox');
        const searchButtonElement = screen.getByRole('link');

        // Act
        fireEvent.change(searchBoxElement, { 
            target: { 
                value: 'Portfolio'
            }
        });

        // Asserts
        expect(searchButtonElement).toHaveAttribute('href', expect.stringContaining('?query=Portfolio'));
    });
})