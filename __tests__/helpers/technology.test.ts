import { getAllTechnologies } from "../../helpers/technology";
import { Technology } from "../../models/technology";

const unMockedFetch = global.fetch;

describe('getAllTechnologies()', () => {
    test('Retrieving a list of technologies', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([
                        {
                            slug: 'reactjs',
                            title: 'React',
                            url: '/path/to/home-page',
                            logo: '/path/to/image'
                        },
                        {
                            slug: 'typescript',
                            title: 'TypeScript',
                            url: '/path/to/home',
                            logo: '/path/to/image'
                        },
                        {
                            slug: 'nextjs',
                            title: 'NextJS',
                            url: '/path/to/url',
                            logo: '/path/to/image'
                        }
                    ])
                } as Response),
            );

        const technologies: Technology[] = await getAllTechnologies();

        // Assert
        expect(technologies).toHaveLength(3);
    });

    test('Retrieving an empty list', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([])
                } as Response),
            );

        const technologies: Technology[] = await getAllTechnologies();

        // Assert
        expect(technologies).toHaveLength(0);
    });

    test('Handle an error', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve([])
                } as Response),
            );

        // Assert
        await expect(getAllTechnologies())
            .rejects
            .toThrow('Unable to retrieve technologies.');
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    });
});