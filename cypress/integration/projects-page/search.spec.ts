// TODO: After completing the project search page add additional asserts.

describe('Searching', () => {
    beforeEach(() => {
        // Go to the projects page
        cy.visit('localhost:3000/project');
    });

    it('Search by just query', () => {
        cy.get('input.input')
            .type('Testing');

        cy.get('a.button')
            .click();

        cy.url().should('contain', '/project/search?query=Testing');
    });

    it('Search by just technology', () => {
        cy.get('.select select')
            .select('nextjs');
        
        cy.get('a.button')
            .click();

        cy.url().should('contain', '/project/search?technology=nextjs');
    });

    it('Search by both query and technology', () => {
        cy.get('input.input')
            .type('Testing');

        cy.get('.select select')
            .select('reactjs');
        
        cy.get('a.button')
            .click();

        cy.url().should('contain', '/project/search?query=Testing&technology=react');
    });

    // TODO: Unskip once project search page is completed or at least have this capability for redirect.
    it.skip('Redirect back to the projects page if no query and technology', () => {
        cy.get('a.button')
            .click();

        cy.url().should('contain', '/project');
    })
});

// Not sure why this is necessary. Remove once you need to import something.
export {};