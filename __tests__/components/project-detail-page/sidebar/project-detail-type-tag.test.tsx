import { render, screen } from "@testing-library/react";

import ProjectDetailTypeTag from "../../../../components/project-detail-page/sidebar/project-detail-type-tag";

import { ProjectType } from '../../../../models/enums/ProjectType';

describe('Render the component', () => {
    test('A web application project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.WEB_APPLICATION } />);

        const tagElement = screen.getByText(/Web Application/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });

    test('A mobile application project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.MOBILE_APPLICATION } />);

        const tagElement = screen.getByText(/Mobile Application/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });

    test('A system application project', () => {
        // Arrange
        render(<ProjectDetailTypeTag type={ ProjectType.SYSTEM_APPLICATION } />);

        const tagElement = screen.getByText(/System Application/i);

        // Assert
        expect(tagElement).toBeInTheDocument();
    });
});