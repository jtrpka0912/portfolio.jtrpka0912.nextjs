import { render, screen } from "@testing-library/react";

import { ProjectType } from "../../../../models/project";

import ProjectListItem from "../../../../components/sections/project-list/project-list-item";

describe('Render component', () => {
    test('Render the project list item', () => {
        // Assert
        render(<ProjectListItem project={
            {
                slug: 'project-1',
                title: 'Project 1',
                technology: ['php', 'wordpress'],
                package: undefined,
                repo: undefined,
                date: { started: '1970-01-01' },
                thumbnail: '',
                gallery: undefined,
                type: ProjectType.FULLSTACK,
                resume: false,
                inDevelopment: false,
                featured: false,
                content: 'Foobar'
            }
        } />);

        const element = screen.getByRole('link');

        expect(element).toBeInTheDocument();
    });
});