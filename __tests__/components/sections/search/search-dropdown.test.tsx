import { render, screen } from "@testing-library/react";

import SearchDropDown from "../../../../components/sections/search/search-dropdown";
import { angularTechnology, jhipsterTechnology, springBootTechnology, typescriptTechnology } from "../../../examples/technologies";

const onChangeMock = jest.fn();

describe('Render the options', () => {
    test('Render the drop down with five technology options', () => {
        // Arrange
        
        // The URL property is not useful for testing, so all of them are going to be just Duck Duck Go.
        render(<SearchDropDown onChange={ onChangeMock } technologies={[
            angularTechnology,
            typescriptTechnology,
            springBootTechnology,
            jhipsterTechnology
        ]} />);

        const optionElements = screen.getAllByRole('option');
        const selectElement = screen.getByRole('combobox');

        // Assert
        expect(optionElements).toHaveLength(5); // Including blank option
        expect(optionElements[2]).toHaveTextContent('TypeScript');
        expect(optionElements[4]).toHaveValue('jhipster');

        expect(selectElement).toBeInTheDocument();
    });

    test('Render only the blank option', () => {
        // Realistically, this component will never render if no technologies.
        
        // Arrange
        render(<SearchDropDown onChange={ onChangeMock } technologies={[]} />);

        const optionElements = screen.getAllByRole('option');

        // Assert
        expect(optionElements).toHaveLength(1);
    });
})