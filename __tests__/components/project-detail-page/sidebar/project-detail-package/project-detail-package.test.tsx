import { render, screen } from "@testing-library/react";

import ProjectDetailPackage from "../../../../../components/project-detail-page/sidebar/project-detail-package/project-detail-package";

describe('Render the component', () => {
    test('Do not render the content if no packages', () => {
        render(<ProjectDetailPackage package={ undefined } />);

        const element = document.querySelector('.project-detail-package');

        expect(element).not.toBeInTheDocument();
    });
});