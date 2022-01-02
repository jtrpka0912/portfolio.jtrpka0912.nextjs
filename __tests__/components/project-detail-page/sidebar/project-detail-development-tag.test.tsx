import { render, screen } from "@testing-library/react";

import ProjectDetailDevelopmentTag from "../../../../components/project-detail-page/sidebar/project-detail-development-tag";

describe('Render the component', () => {
    test('Render the component if in development', () => {
        // Arrange
        render(<ProjectDetailDevelopmentTag inDevelopment={ true } />);

        const tagElement = screen.getByText('In Development');

        // Assert
        expect(tagElement).toBeInTheDocument();
    });

    test('Do not render the component if not in development', () => {
        // Arrange
        render(<ProjectDetailDevelopmentTag inDevelopment={ false } />);

        const tagElement = screen.queryByText('In Development');

        // Assert
        expect(tagElement).not.toBeInTheDocument();
    });
});