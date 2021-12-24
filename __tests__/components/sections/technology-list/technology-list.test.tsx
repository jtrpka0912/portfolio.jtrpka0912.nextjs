import { render, screen } from "@testing-library/react";
import { SWRConfig } from "swr";

import TechnologyList from "../../../../components/sections/technology-list/technology-list";

const unMockedFetch = global.fetch;

describe('Without technologies', () => {
    test('Render component without any technologies', () => {
        // Arrange
        render(<TechnologyList technologies={ [] } />);

        const emptyComponent = screen.getByText('There are no listed technologies.');

        // Assert
        expect(emptyComponent).toBeInTheDocument();
    });
});

describe('With technologies', () => {
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

    test('Render component with some technologies', async () => {
        // Arrange
        render(<TechnologyList technologies={ ['angular', 'jhipster'] } />);

        const technologyItems = await screen.findAllByRole('listitem');

        // Assert
        expect(technologyItems).toHaveLength(2);
    });

    test('Found no technologies', async () => {
        // Arrange
        render(
            <SWRConfig value={ { provider: () => new Map() }}>
                <TechnologyList technologies={ ['golang', 'svelte'] } />
            </SWRConfig>
        );

        const message = await screen.findByText('There are no listed technologies.');

        expect(message).toBeInTheDocument();
    });

    test('Only found a few technologies', async () => {
        // Arrange
        render(<TechnologyList technologies={ ['golang', 'svelte', 'typescript', 'spring-boot'] } />);

        const technologyItems = await screen.findAllByRole('listitem');

        // Assert
        expect(technologyItems).toHaveLength(2);
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    });
});