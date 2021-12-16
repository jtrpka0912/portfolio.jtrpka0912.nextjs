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
                    json: () => Promise.resolve({
                        reactjs: {
                            title: 'React',
                            url: '/path/to/home-page',
                            logo: '/path/to/image'
                        },
                        typescript: {
                            title: 'TypeScript',
                            url: '/path/to/home',
                            logo: '/path/to/image'
                        },
                        nextjs: {
                            title: 'NextJS',
                            url: '/path/to/url',
                            logo: '/path/to/image'
                        }
                    })
                } as Response),
            );

        const technologies: Technology[] = await getAllTechnologies();

        // Assert
        expect(technologies).toHaveProperty('reactjs');
        expect(technologies).toHaveProperty('typescript');
        expect(technologies).toHaveProperty('nextjs');
    });

    test('Retrieving an empty list', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({})
                } as Response),
            );

        const technologies: Technology[] = await getAllTechnologies();

        // Assert
        expect(technologies).toMatchObject({});
    });

    test('Handle an error', async () => {
        // Arrange
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve({})
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