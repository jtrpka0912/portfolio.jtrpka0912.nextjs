describe('Github Repository', () => {
    beforeEach(() => {
        // Go to the test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Visit the Github repository on another tab', () => {
        // Assert
        cy.get('.project-detail-repo__github a')
            .should('have.attr', 'target', '_blank');
    });
});

export {}