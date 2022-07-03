import { 
    getAllTechnologies,
    convertSlugsToTechnologies
} from "../../helpers/technology";

import { ITechnology } from "../../models/ITechnology";

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

        const technologies: ITechnology[] = await getAllTechnologies();

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

        const technologies: ITechnology[] = await getAllTechnologies();

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

describe('convertSlugsToTechnologies()', () => {
    beforeEach(() => {
        global.fetch = jest.fn()
            .mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([
                        {
                            slug: 'angular',
                            title: 'Angular',
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
                            slug: 'spring-boot',
                            title: 'Spring Boot',
                            url: '/path/to/url',
                            logo: ''
                        },
                        {
                            slug: 'jhipster',
                            title: 'JHipster',
                            url: '/path/to/somewhere',
                            logo: ''
                        }
                    ])
                } as Response),
            );
    });

    test('Retrieve technologies from slugs', async () => {
        // Arrange
        const technologies = await convertSlugsToTechnologies(['jhipster', 'angular']);

        // Assert
        expect(technologies).toHaveLength(2);
        expect(technologies).toMatchObject<ITechnology[]>([
            {
                slug: 'jhipster',
                title: 'JHipster',
                url: '/path/to/somewhere',
                logo: ''
            },
            {
                slug: 'angular',
                title: 'Angular',
                url: '/path/to/home-page',
                logo: '/path/to/image'
            }
        ]);
    });

    test('Find just one technology, but still remain an array', async () => {
        // Arrange
        const technology = await convertSlugsToTechnologies(['typescript']);

        // Assert
        expect(technology).toHaveLength(1);
        expect(technology).toMatchObject<ITechnology[]>([
            {
                slug: 'typescript',
                title: 'TypeScript',
                url: '/path/to/home',
                logo: '/path/to/image'
            }
        ]);
    });

    test('Find no technologies, return empty array', async () => {
        // Arrange
        const nothing = await convertSlugsToTechnologies(['vuejs', 'svelte']);

        // Assert
        expect(nothing).toHaveLength(0);
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    });
});