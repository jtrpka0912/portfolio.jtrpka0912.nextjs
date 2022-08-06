import { render, screen } from "@testing-library/react";

import { projectOne } from "../../../examples/projects";

import ProjectDetailMainArea from "../../../../components/project-detail-page/project-detail-main-area/project-detail-main-area";

describe('Render the component', () => {
  beforeEach(() => {
    render(<ProjectDetailMainArea project={
      projectOne
    } />);
  });

  test('Render the main area', () => {
    // Arrange
    const asideElement = screen.getByRole('complementary');

    // Assert
    expect(asideElement).toBeInTheDocument();
  });
});