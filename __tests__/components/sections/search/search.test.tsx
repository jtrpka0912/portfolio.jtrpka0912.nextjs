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

    test('Query for just the technology', () => {
        // Arrange
        render(<Search technologies={[
            { slug: 'react', title: 'React', url: 'http://duckduckgo.com' },
            { slug: 'nextjs', title: 'NextJS', url: 'http://duckduckgo.com' },
            { slug: 'css', title: 'CSS 3', url: 'http://duckduckgo.com' },
            { slug: 'sass', title: 'SASS', url: 'http://duckduckgo.com' },
            { slug: 'golang', title: 'Go Language', url: 'http://duckduckgo.com' },
        ]} />);

        const searchDropDownElement = screen.getByRole('combobox');
        const searchButtonElement = screen.getByRole('link');

        // Act
        fireEvent.change(searchDropDownElement, {
            target: {
                value: 'sass'
            }
        });

        // Assert
        expect(searchButtonElement).toHaveAttribute('href', expect.stringContaining('?technology=sass'));
    });

    test('Query for both query and technology', () => {
        // Arrange
        render(<Search technologies={[
            { slug: 'react', title: 'React', url: 'http://duckduckgo.com' },
            { slug: 'nextjs', title: 'NextJS', url: 'http://duckduckgo.com' },
            { slug: 'css', title: 'CSS 3', url: 'http://duckduckgo.com' },
            { slug: 'sass', title: 'SASS', url: 'http://duckduckgo.com' },
            { slug: 'golang', title: 'Go Language', url: 'http://duckduckgo.com' },
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
                value: 'golang'
            }
        });

        expect(searchButtonElement).toHaveAttribute('href', expect.stringContaining('?query=Mobile&technology=golang'));
    })
})