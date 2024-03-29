import { render, screen } from "@testing-library/react";
import SplitContent from "./SplitContent";

describe('Render the component', () => {
  test('Render the section', () => {
    // Arrange
    render(
      <SplitContent 
        ariaLabel="Split content section"
        image="/path/to/the/image.jpg"
        altText="Sample Image"
      >
        Hello World
      </SplitContent>);

    const sectionElement = screen.getByRole('region');

    // Assert
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAccessibleName('Split content section');
  });

  test('Render the section without aria label', () => {
    // Arrange
    render(
      <SplitContent
        image="/path/to/the/image.jpg"
        altText="Sample Image"
      >
        Hello World
      </SplitContent>);

    const sectionElement = screen.getByRole('region');

    // Assert
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAccessibleName('A split content section');
  })
});

describe('The split content elements', () => {
  test('Add elements to the section', () => {
    // Arrange
    render(<SplitContent 
      ariaLabel="Split content testing"
      image="/path/to/the/image.jpg"
      altText="Sample Image"
    >
      <p>This is a triumph!</p>
      <p>A huge success...</p>
    </SplitContent>);

    const splitElement = screen.getByRole('region');

    // Assert
    expect(splitElement).toBeInTheDocument();
    expect(splitElement).toHaveTextContent(/A huge success/i);
  });

  test('Test the image', () => {
    // Arrange
    render(
      <SplitContent 
        ariaLabel="Split content testing"
        image="/path/to/the/image.jpg"
        altText="Sample Image"
      >
        <p>There is cake at the end.</p>
      </SplitContent>
    );

    const splitElement = screen.getByRole('region');
    const imageElement = screen.getByRole('img');

    // Assert
    expect(splitElement).toBeInTheDocument();
    expect(splitElement).not.toHaveTextContent('There is no cake at the end.');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAccessibleName('Sample Image');
  });
});