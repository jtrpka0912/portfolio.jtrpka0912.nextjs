import { render, screen } from "@testing-library/react";

import Section from '../../../components/ui/section';

describe('Render the component', () => {
    test('Render just the content', () => {
        // Arrange
        render(<Section><p>Hello World</p></Section>);

        const textFound = screen.getByText('Hello World');

        // Assert
        expect(textFound).toBeInTheDocument();
    });
});