import { render, screen, waitForOptions } from "@testing-library/react";

// Using SWRConfig will allow resetting the cache.
import { SWRConfig } from "swr";

import ProjectDetailGithub from "../../../../../components/project-detail-page/sidebar/project-detail-repo/project-detail-github";

const unMockedFetch = global.fetch;

describe('Render the component', () => {
    const waitForOption: waitForOptions = {
        timeout: 1500
    };

    it('Using a valid Github repo', async () => {
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

        render(
            <SWRConfig value={ { provider: () => new Map() } }>
                <ProjectDetailGithub 
                    github="https://github.com/octocat/hello-world" 
                />
            </SWRConfig>
        );

        const linkElement = await screen.findByRole('link', {}, waitForOption);

        // Assert
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://github.com/octocat/hello-world');
        expect(linkElement).toHaveAttribute('target', '_blank');
    });

    it('Not a valid Github repo', async () => {
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
            
        render(
            <SWRConfig value={ { provider: () => new Map() } }>
                <ProjectDetailGithub 
                    github="https://github.com/octocat/goodbye-world"
                />
            </SWRConfig>
        );

        const message = await screen.findByText('Repo may be invalid or private.', {}, waitForOption);

        expect(message).toBeInTheDocument();
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    })
});