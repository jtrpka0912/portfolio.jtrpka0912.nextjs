import { render, screen } from "@testing-library/react";

import TechnologyList from "../../../../components/sections/technology-list/technology-list";

describe('Without technologies', () => {
    test('Render component without any technologies', () => {
        // Arrange
        render(<TechnologyList technology={ [] } />);

        const emptyComponent = screen.getByText('There are no listed technologies.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});