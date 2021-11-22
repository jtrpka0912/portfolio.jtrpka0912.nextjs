/// <reference types="cypress" />

describe('Desktop Tab', () => {
    beforeEach(() => {
        // Go to the portfolio page
        cy.visit('localhost:3000/project/portfolio')
    });

    it('Check if the desktop tab is active', () => {
        const tabs = cy.get('.gallery li');
        tabs.should('have.length', 3);

        // TODO: Check if the desktop tab is active

        // TODO: Test if the desktop tab panel is revealed and then count the number of items in it.
    });
})

// Not sure why this is necessary. Remove once you need to import something.
export {};