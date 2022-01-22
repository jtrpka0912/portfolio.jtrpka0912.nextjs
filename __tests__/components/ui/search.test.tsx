import { render } from "@testing-library/react";

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

    test('Render with background color using Bulma class', () => {
        // Arrange
        render(<Section backgroundColor="has-background-white">Hello World</Section>);

        const sectionElement = document.querySelector('.section');

        // Assert
        expect(sectionElement).toHaveClass('has-background-white');
    });

    test('Render with background color using anything else', () => {
        // Arrange
        render(<Section backgroundColor="#000000">Hello World</Section>);

        const sectionElement = document.querySelector('.section');

        // Assert
        expect(sectionElement).toHaveStyle('background-color: #000');
    });

    // TODO: I wonder if there is a way to check if a backgroundColor value is a valid value for backgroundColor (JS version of background-color) for the CSSProperties object.
});