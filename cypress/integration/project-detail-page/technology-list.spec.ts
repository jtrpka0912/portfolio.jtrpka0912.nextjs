describe('Technology List', () => {
    beforeEach(() => {
        // Go to the test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Count the number of technology items', () => {
        // Arrange
        const expectedAmount = 4;

        // Assert
        cy.get('.technology-list-item')
            .should('have.length', expectedAmount);
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};