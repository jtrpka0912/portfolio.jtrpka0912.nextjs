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

    test('One link', () => {
        // Arrange
        render(<Breadcrumb links={[
            { text: 'Hello World', url: '/hello-world' }
        ]} />);

        const breadcrumbItems = screen.getAllByRole('listitem');
        const helloWorldItem = screen.getByText('Hello World');

        // Assert
        expect(breadcrumbItems).toHaveLength(2);
        expect(helloWorldItem).toBeInTheDocument();
    });

    test('Three links', () => {
        // Arrange
        render(<Breadcrumb links={[
            { text: 'Hello World', url: '/hello-world' },
            { text: 'Path', url: '/hello-world/path'},
            { text: 'Enlightment', url: '/hello-world/path/enlightment'}
        ]} />);

        const breadcrumbItems = screen.getAllByRole('listitem');

        // Assert
        expect(breadcrumbItems).toHaveLength(4);
    });
});