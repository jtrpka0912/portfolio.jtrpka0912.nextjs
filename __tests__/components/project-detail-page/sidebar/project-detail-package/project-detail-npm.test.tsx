import { render, screen } from "@testing-library/react";

import ProjectDetailNpm from "../../../../../components/project-detail-page/sidebar/project-detail-package/project-detail-npm";

describe('Render the component', () => {
    // Realistically, there is no reason this component would ever render if there are no packages.

    beforeEach(() => {
        render(<ProjectDetailNpm packages={['markdown', 'gray-matter', 'lodash']} />);
    });

    test('Count the number of links', () => {
        // Arrange
        const npmLinkElements = screen.getAllByRole('link');

        // Assert
        expect(npmLinkElements).toHaveLength(3);
    });

    test('The structure of a link', () => {
        // Arrange
        const npmLinkElements = screen.getAllByRole('link');

        // Assert
        expect(npmLinkElements[0]).toHaveAttribute('href', 'https://npmjs.org/package/markdown');
        expect(npmLinkElements[0]).toHaveAttribute('target', '_blank');
    });
});