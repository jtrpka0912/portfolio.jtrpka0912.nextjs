import { render, screen } from "@testing-library/react";

import TechnologyList from "../../../../components/sections/technology-list/technology-list";

describe('Rendering the component', () => {
    test('Count the number of technologies', () => {
        // Arrange
        render(<TechnologyList technology={[
            'reactjs', 'react-testing-library', 'jest'
        ]} />);

        const technologyElements = screen.getAllByRole('listitem');

        // Assert
        expect(technologyElements).toHaveLength(3);
    });
});