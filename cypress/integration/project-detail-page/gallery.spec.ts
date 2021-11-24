describe('The Tabs', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/project/test');
    });

    it('Count the number of tabs', () => {
        // Arrange
        const expectedTabCount = 2;
        const tabs = cy.get('.gallery li');

        // Assert
        tabs.should('have.length', expectedTabCount);
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};