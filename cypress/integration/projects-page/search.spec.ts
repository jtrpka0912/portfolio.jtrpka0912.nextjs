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
});

// Not sure why this is necessary. Remove once you need to import something.
export {};