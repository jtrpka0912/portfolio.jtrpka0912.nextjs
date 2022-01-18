import { render, screen } from "@testing-library/react";

import SearchDropDown from "../../../../components/sections/search/search-dropdown";

describe('Render the options', () => {
    test('Render the drop down with five technology options', () => {
        // Arrange
        
        // The URL property is not useful for testing, so all of them are going to be just Duck Duck Go.
        render(<SearchDropDown technologies={[
            { slug: 'react', title: 'React', url: 'http://duckduckgo.com' },
            { slug: 'nextjs', title: 'NextJS', url: 'http://duckduckgo.com' },
            { slug: 'css', title: 'CSS 3', url: 'http://duckduckgo.com' },
            { slug: 'sass', title: 'SASS', url: 'http://duckduckgo.com' },
            { slug: 'golang', title: 'Go Language', url: 'http://duckduckgo.com' },
        ]} />);

        const optionElements = screen.getAllByRole('option');
        const selectElement = screen.getByRole('combobox');

        // Assert
        expect(optionElements).toHaveLength(6); // Including blank option
        expect(optionElements[2]).toHaveTextContent('NextJS');
        expect(optionElements[4]).toHaveValue('sass');

        expect(selectElement).toBeInTheDocument();
    });

    test('Render only the blank option', () => {
        // Realistically, this component will never render if no technologies.
        
        // Arrange
        render(<SearchDropDown technologies={[]} />);

        const optionElements = screen.getAllByRole('option');

        // Assert
        expect(optionElements).toHaveLength(1);
    });
})