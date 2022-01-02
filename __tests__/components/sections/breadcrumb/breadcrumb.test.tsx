import { render, screen } from "@testing-library/react";

import Breadcrumb from "../../../../components/sections/breadcrumb/breadcrumb";

describe('Render component', () => {
    test('No links given', () => {
        // Arrange
        render(<Breadcrumb />);

        const breadcrumbItems = screen.getAllByRole('listitem');
        const homeItem = screen.getByText('Home');

        // Assert
        expect(breadcrumbItems).toHaveLength(1);
        expect(homeItem).toBeInTheDocument();
    });
});