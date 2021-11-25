describe('The gallery tabs', () => {
    beforeEach(() => {
        // Go to the test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Count the number of tabs', () => {
        // Arrange
        const expectedAmount = 2;

        // Assert
        cy.get('.gallery li')
            .should('have.length', expectedAmount);
    });
});

describe('Count the gallery items', () => {
    beforeEach(() => {
        // Go to test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Fail to find the desktop tab', () => {
        // Assert
        cy.get('.gallery li')
            .contains('Desktop')
            .should('not.exist');
    });

    it('Count the number of tablet gallery items', () => {
        // Arrange
        const expectedAmount = 1;

        // Assert
        cy.get('.gallery li')
            .contains('Tablet')
            .parent()
            .should('have.class', 'is-active');

        cy.get('.gallery__panel .thumbnail')
            .should('have.length', expectedAmount);
    });

    it('Switch and count the mobile gallery items', () => {
        // Arrange
        const expectedAmount = 2;

        // Action
        cy.get('.gallery li')
            .contains('Mobile')
            .click();

        // Assert
        cy.get('.gallery li')
            .contains('Mobile')
            .parent()
            .should('have.class', 'is-active');

        cy.get('.gallery__panel .thumbnail')
            .should('have.length', expectedAmount);
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};