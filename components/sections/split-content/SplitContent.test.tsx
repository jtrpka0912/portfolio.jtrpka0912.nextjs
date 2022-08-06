import { render, screen } from "@testing-library/react";
import SplitContent from "./SplitContent";

describe('Render the component', () => {
  test('Render the section', () => {
    // Arrange
    render(<SplitContent />);

    const sectionElement = screen.getByRole('region');

    // Assert
    expect(sectionElement).toBeInTheDocument();
  });
});