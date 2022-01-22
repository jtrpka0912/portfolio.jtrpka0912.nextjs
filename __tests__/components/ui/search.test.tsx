import { render, screen } from "@testing-library/react";

import Section from '../../../components/ui/section';

describe('Render the component', () => {
    test('Render just the content', () => {
        // Arrange
        render(<Section><p>Hello World</p></Section>);

        const sectionElement = document.querySelector('.section > .container');
        const titleElement = document.querySelector('.title');

        // Assert
        expect(sectionElement).toBeInTheDocument();
        expect(sectionElement).toHaveTextContent('Hello World');
        expect(titleElement).not.toBeInTheDocument();
    });

    test('Render with the title', () => {
        // Arrange
        render(<Section title="Foobar">Hello World</Section>);

        const titleElement = document.querySelector('.title');

        // Assert
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent('Foobar');
    });
});