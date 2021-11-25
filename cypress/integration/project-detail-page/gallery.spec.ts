describe('The Tabs', () => {
    beforeEach(() => {
        // Go to the test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Count the number of tabs', () => {
        // Arrange
        const expectedTabCount = 2;

        // Assert
        cy.get('.gallery li')
            .should('have.length', expectedTabCount);
    });
});

describe('Count the gallery items', () => {
    beforeEach(() => {
        // Go to test project page
        cy.visit('localhost:3000/project/test');
    });

    // NOTE: There are no desktop gallery items for the test project, so the tab will not show.

    it('Count the number of tablet gallery items', () => {
        // Arrange
        const expectedAmount = 1;

        // Assert
        cy.get('.gallery li')
            .should('have.class', 'is-active');
        cy.get('.gallery__panel .thumbnail')
            .should('have.length', expectedAmount);
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};