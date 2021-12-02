import { render, screen } from '@testing-library/react';

import { Project, ProjectType } from '../../../../models/project';

import ProjectList from '../../../../components/projects-page/project-list/project-list';

describe('Without projects', () => {
    test('Render component without any projects', () => {
        // Arrange
        render(<ProjectList projects={ [] } />);

        const emptyComponent = screen.getByText('Unable to find any projects.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});

describe('With projects', () => {
    beforeEach(() => {
        const projects: Project[] = [
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
            },
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
            },
            {
                slug: 'project-3',
                title: 'Project 3',
                technology: ['golang'],
                package: {
                    go: ['net/http']
                },
                repo: undefined,
                date: { started: '1970-01-01' },
                thumbnail: '',
                gallery: undefined,
                type: ProjectType.BACKEND,
                resume: true,
                inDevelopment: false,
                featured: false,
                content: 'Foobar'
            }
        ]

        render(<ProjectList projects={ projects } />);
    });

    test('Render component with projects', () => {
        const thumbnails = screen.getAllByRole('link');

        expect(thumbnails).toHaveLength(3);
    })
});