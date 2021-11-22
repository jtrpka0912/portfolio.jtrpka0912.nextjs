/// <reference types="cypress" />

describe('The Tabs', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/project/portfolio');
    });

    it('Count the number of tabs', () => {
        // Arrange
        const expectedTabCount = 3;
        const tabs = cy.get('.gallery li');

        // Assert
        tabs.should('have.length', expectedTabCount);
    })
})

describe('Desktop Tab', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/project/portfolio');
    });

    it('Check if the desktop tab is active', () => {
        // Arrange
        const tabs = cy.get('.gallery li');
        
        // Arrange
        tabs.first().should('have.class', 'is-active');
        
        
    });

    it.skip('Get the right count of items in the desktop gallery', () => {
        // TODO: Test if the desktop tab panel is revealed and then count the number of items in it.
    });
});

describe('Tablet Tab', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/project/portfolio');
    });

    it('Click the tablet tab to make it active', () => {
        // Arrange
        const tabs = cy.get('.gallery li');

        // Action
        tabs.eq(1).click();

        // Assert
        tabs.eq(1).should('have.class', 'is-active');
    });
});

// Not sure why this is necessary. Remove once you need to import something.
export {};