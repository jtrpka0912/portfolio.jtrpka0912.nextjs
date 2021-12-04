import { render, screen } from "@testing-library/react";

import { ProjectType } from "../../../../models/project";

import ProjectDetailMainArea from "../../../../components/project-detail-page/project-detail-main-area/project-detail-main-area";

describe('Render the component', () => {
    beforeEach(() => {
        render(<ProjectDetailMainArea project={
            {
                slug: 'project-2',
                title: 'Project 2',
                technology: ['javascript', 'typescript', 'angular'],
                package: {
                    npm: ['lobash']
                },
                repo: undefined,
                date: { started: '1970-01-01' },
                thumbnail: '',
                gallery: undefined,
                type: ProjectType.FRONTEND,
                resume: true,
                inDevelopment: false,
                featured: false,
                content: 'Foobar'
            }
        } />);
    });

    test('Render the main area', () => {
        // Arrange
        const asideElement = screen.getByRole('complementary');

        // Assert
        expect(asideElement).toBeInTheDocument();
    });
});