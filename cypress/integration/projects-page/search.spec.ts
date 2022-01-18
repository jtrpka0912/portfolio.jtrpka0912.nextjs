describe('Searching', () => {
    beforeEach(() => {
        // Go to the projects page
        cy.visit('localhost:3000/project');
    });

    it('Search by just query', () => {
        // Action
        cy.get('input.input')
            .type('Testing');

        cy.get('a.button')
            .click();

        cy.url().should('contain', '/project/search?query=Testing');
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};