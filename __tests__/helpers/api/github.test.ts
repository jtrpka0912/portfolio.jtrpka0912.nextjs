import { convertRepoURLToOwnerAndRepo } from '../../../helpers/api/github';

describe('convertRepoURLToOwnerAndRepo()', () => {
    test('Get owner and repo from Github repo URL', () => {
        // Arrange
        const results = convertRepoURLToOwnerAndRepo('https://github.com/octocat/hello-world');

        // Assert
        expect(results).toStrictEqual(['octocat', 'hello-world']);
    });

    test('Get owner and repo from Github repo URL with www sub-domain', () => {
        // Arrange
        const results = convertRepoURLToOwnerAndRepo('https://www.github.com/octocat/hello-world');

        // Assert
        expect(results).toStrictEqual(['octocat', 'hello-world']);
    });

    test('Thrown error with obvious non-Github repo URL', () => {
        // Assert
        expect(() => {
            convertRepoURLToOwnerAndRepo('https://www.duckduckgo.com');
        }).toThrow('Invalid Github URL');
    });

    test('Thrown error with missing Github repo endpoint', () => {
        // Assert
        expect(() => {
            convertRepoURLToOwnerAndRepo('https://www.github.com/octocat');
        }).toThrow('Invalid Github URL')
    });
});