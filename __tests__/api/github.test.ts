import { getRepo } from '../../api/github';

/**
 * @var { func } unMockedFetch
 * @description Keep the original global.fetch function for cleanup
 * @author J. Trpka
 * @tutorial https://jaketrent.com/post/mock-fetch-jest-test
 */
const unMockedFetch = global.fetch;

describe('getRepo', () => {
    test('Retrieve Github repo data', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({
                        name: 'Hello-World'
                    })
                } as Response),
            );

        const response = await getRepo('https://github.com/octocat/hello-world');

        // Assert
        expect(fetch).toBeCalledTimes(1);
        expect(response.name).toBe('Hello-World');
    });

    test('Retrieve Github error', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve({
                        message: 'Not Found',
                        documentation_url: 'Blah blah blah...'
                    })
                } as Response),
            );

        // Assert
        await expect(getRepo('https://github.com/octocat/goodbye-world'))
            .rejects
            .toThrow('Unable to retrieve Github repo data.');

        expect(fetch).toBeCalledTimes(1);
    });

    test('Retrieve Github error through error response', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    // Not likely to happen, but lets do it for the sake of testing.
                    ok: true, 
                    json: () => Promise.resolve({
                        message: 'Not Found again',
                        documentation_url: 'Blah blah blah...'
                    })
                } as Response),
            );

        // Assert
        await expect(getRepo('https://github.com/octocat/goodbye-world'))
            .rejects
            .toThrow('Unable to retrieve Github repo data.');

        expect(fetch).toBeCalledTimes(1);
    });

    test('Retrieve Github response though it shares both of the error message properties', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    // Not likely to happen, but lets do it for the sake of testing.
                    ok: true, 
                    json: () => Promise.resolve({
                        // The original two properties
                        message: 'Not Found again',
                        documentation_url: 'Blah blah blah...',
                        // The oddball property
                        foo: 'bar'
                    })
                } as Response),
            );

        const response = await getRepo('https://www.github.com/octocat/goodbye-world');

        // Assert
        expect(fetch).toBeCalledTimes(1);
        expect(response.foo).toBe('bar');
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    });
});