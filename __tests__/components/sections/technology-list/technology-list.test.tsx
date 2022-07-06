import { render, screen } from "@testing-library/react";
import { SWRConfig } from "swr";

import TechnologyList from "../../../../components/sections/technology-list/technology-list";
import { angularTechnology, jhipsterTechnology } from "../../../examples/technologies";

describe('Without technologies', () => {
  test('Render component without any technologies', () => {
    // Arrange
    render(<TechnologyList technologies={[]} />);

    const emptyComponent = screen.getByText('There are no listed technologies.');

    // Assert
    expect(emptyComponent).toBeInTheDocument();
  });
});

describe('With technologies', () => {
  test('Render component with some technologies', async () => {
    // Arrange
    render(<TechnologyList technologies={[angularTechnology, jhipsterTechnology]} />);

    const technologyItems = await screen.findAllByRole('listitem');

    // Assert
    expect(technologyItems).toHaveLength(2);
  });

  test('Found no technologies', async () => {
    // Arrange
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <TechnologyList technologies={[]} />
      </SWRConfig>
    );

    const message = await screen.findByText('There are no listed technologies.');

    expect(message).toBeInTheDocument();
  });
});