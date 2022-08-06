import { render, screen } from "@testing-library/react";
import SplitContent from "./SplitContent";

describe('Render the component', () => {
  test('Render the section', () => {
    // Arrange
    render(<SplitContent ariaLabel="Split content section" />);

    const sectionElement = screen.getByRole('region');

    // Assert
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAccessibleName('Split content section');
  });
});