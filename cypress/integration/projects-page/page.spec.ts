describe('Clicking a thumbnail', () => {
    beforeEach(() => {
        // Go to the projects page
        cy.visit('localhost:3000/project');
    });

    it('Click a link', () => {
        // Action
        cy.contains('Test Project')
            .click();

        // Assert
        cy.url().should('contain', '/project/test');
    })
});

// Not sure why this is necessary. Remove once you need to import something.
export {};