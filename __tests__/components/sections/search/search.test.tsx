import { render, screen } from "@testing-library/react";

import Search from "../../../../components/sections/search/search";

describe('Render the component', () => {
    test('Render the component with five technologies total', () => {
        // Arrange
        
        // The URL property is not going to be useful, so all of them are going to be just Duck Duck Go.
        render(<Search technologies={[
            { slug: 'react', title: 'React', url: 'http://duckduckgo.com' },
            { slug: 'nextjs', title: 'NextJS', url: 'http://duckduckgo.com' },
            { slug: 'css', title: 'CSS 3', url: 'http://duckduckgo.com' },
            { slug: 'sass', title: 'SASS', url: 'http://duckduckgo.com' },
            { slug: 'golang', title: 'Go Language', url: 'http://duckduckgo.com' },
        ]} />);
        const optionElements = screen.getAllByRole('option');

        // Assert
        expect(optionElements).toHaveLength(5);
        expect(optionElements[2]).toHaveTextContent('CSS 3');
        expect(optionElements[4]).toHaveValue('golang');
    });
});