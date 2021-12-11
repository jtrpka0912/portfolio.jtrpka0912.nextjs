import { 
    convertRepoURLToOwnerAndRepo,
    checkIfErrorMessageResponse 
} from '../../../helpers/api/github';

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

describe('checkIfErrorMessageResponse', () => {
    // For a Github error message, it only contains the following two properties: message and documentation_url

    test('Return true since it is an error object', () => {
        // Arrange
        const isItError = checkIfErrorMessageResponse({
            message: 'Foo',
            documentation_url: 'Bar'
        });

        expect(isItError).toBeTruthy();
    });

    test('Return false since its just any other object', () => {
        const isItError = checkIfErrorMessageResponse({
            foo: 'bar'
        });

        expect(isItError).toBeFalsy();
    });

    test('Return false though this object has both properties as well', () => {
        const isItError = checkIfErrorMessageResponse({
            foo: 'bar',
            message: 'Foo',
            documentation_url: 'Bar'
        });
        
        expect(isItError).toBeFalsy();
    });
});