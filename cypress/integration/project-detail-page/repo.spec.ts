describe('Repository Sidebar', () => {
    beforeEach(() => {
        // Go to the test project page
        cy.visit('localhost:3000/project/test');
    });

    it('Should have link to Github repository', () => {
        // Assert
        cy.get('.project-detail-repo a')
            .should('have.length', 1)
            .should('have.attr', 'target', '_blank');
    });
});

export {}