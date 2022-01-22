import { 
    filterProjectsByTitle 
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
});