import { 
    filterProjectsByTitle,
    filterProjectsByTechnology
} from "../../helpers/project";

import {
    projectOne,
    projectTwo,
    projectThree,
    projectFour
} from '../examples/projects';

describe('filterProjectsByTitle()', () => {
    test('Return all projects with no query.', () => {
        // Arrange
        const filteredProjects = filterProjectsByTitle([
            projectOne,
            projectTwo,
            projectFour,
            projectThree
        ], '');

        // Assert
        expect(filteredProjects).toHaveLength(4);
    });

    test('Return one project with case-insensitve query', () => {
        // Arrange
        const filteredProjects = filterProjectsByTitle([
            projectOne,
            projectTwo,
            projectFour,
            projectThree
        ], 'blog');

        // Assert
        expect(filteredProjects).toHaveLength(1);
        expect(filteredProjects[0].title).toBe('My Blog Website');
    });

    test('Retrieve more than one project from a query', () => {
        // Arrange
        const filteredProjects = filterProjectsByTitle([
            projectOne,
            projectThree,
            projectTwo,
            projectFour
        ], 'rester');

        // Assert
        expect(filteredProjects).toHaveLength(2);
        expect(filteredProjects[0].title).toBe('Rester API');
        expect(filteredProjects[1].title).toBe('Rester CRM');
    });

    test('Retrieve projects with more than one word', () => {
        // Arrange
        const filteredProjects = filterProjectsByTitle([
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ], 'blog portfolio');

        // Assert
        expect(filteredProjects).toHaveLength(2);
    });

    test('Return no projects', () => {
        // Arrange
        const filteredProjects = filterProjectsByTitle([
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ], 'Foo Bar');

        // Assert
        expect(filteredProjects).toHaveLength(0);
    });
});

describe('filterProjectsByTechnology', () => {
    test('Do not filter projects with no technology', () => {
        // Arrange
        const filteredProjects = filterProjectsByTechnology([
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ], '');

        // Assert
        expect(filteredProjects).toHaveLength(4);
    });

    test('Filter projects with technology slug', () => {
        // Arrange
        const filteredProjects = filterProjectsByTechnology([
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ], 'nextjs');

        // Assert
        expect(filteredProjects).toHaveLength(1);
    });

    test('Get no projects returned', () => {
        // Arrange
        const filteredProjects = filterProjectsByTechnology([
            projectOne,
            projectTwo,
            projectThree,
            projectFour
        ], 'rust');

        // Assert
        expect(filteredProjects).toHaveLength(0);
    });
});