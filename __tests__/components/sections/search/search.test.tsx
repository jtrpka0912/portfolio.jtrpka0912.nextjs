import { fireEvent, render, screen } from "@testing-library/react";

import Search from "../../../../components/sections/search/search";
import { angularTechnology, jhipsterTechnology, springBootTechnology, typescriptTechnology } from "../../../examples/technologies";

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

    test('Query for just the technology', () => {
        // Arrange
        render(<Search technologies={[
            angularTechnology,
            typescriptTechnology,
            springBootTechnology,
            jhipsterTechnology
        ]} />);

        const searchDropDownElement = screen.getByRole('combobox');
        const searchButtonElement = screen.getByRole('link');

        // Act
        fireEvent.change(searchDropDownElement, {
            target: {
                value: 'spring-boot'
            }
        });

        // Assert
        expect(searchButtonElement).toHaveAttribute('href', expect.stringContaining('?technology=spring-boot'));
    });

    test('Query for both query and technology', () => {
        // Arrange
        render(<Search technologies={[
            angularTechnology,
            typescriptTechnology,
            springBootTechnology,
            jhipsterTechnology
        ]} />);

        const searchBoxElement = screen.getByRole('textbox');
        const searchDropDownElement = screen.getByRole('combobox');
        const searchButtonElement = screen.getByRole('link');

        // Act
        fireEvent.change(searchBoxElement, { 
            target: { 
                value: 'Mobile'
            }
        });

        fireEvent.change(searchDropDownElement, {
            target: {
                value: 'typescript'
            }
        });

        expect(searchButtonElement).toHaveAttribute('href', expect.stringContaining('?query=Mobile&technology=typescript'));
    })
})