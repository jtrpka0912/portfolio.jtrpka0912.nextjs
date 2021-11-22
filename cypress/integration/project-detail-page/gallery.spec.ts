/// <reference types="cypress" />

describe('Clicking the tabs', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/projects/portfolio')
    });

    it('Check if the desktop tab is active', () => {
        const tabs = cy.get('.gallery li');
        tabs.should('have.length', 3);
    });
})

// Not sure why this is necessary. Remove once you need to import something.
export {};