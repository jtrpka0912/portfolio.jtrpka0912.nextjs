import { render } from "@testing-library/react";

import ProjectDetailPackage from "../../../../../components/project-detail-page/sidebar/project-detail-package/project-detail-package";

describe('Render the component', () => {
    test('Do not render the content if no packages', () => {
        render(<ProjectDetailPackage package={ undefined } />);

        const element = document.querySelector('.project-detail-package');

        expect(element).not.toBeInTheDocument();
    });

    test('Do not render the content if there are no packages from an empty IProject', () => {
        // Arrange
        render(<ProjectDetailPackage package={{
            npm: [],
            go: [],
            maven: []
        }} />);

        const element = document.querySelector('.project-detail-package');

        // Assert
        expect(element).not.toBeInTheDocument();
    });

    test('Render if there are any packages.', () => {
        render(<ProjectDetailPackage package={{
            maven: ['spring-boot-starter-test']
        }} />);

        const element = document.querySelector('.project-detail-package');

        expect(element).toBeInTheDocument();
    });
});