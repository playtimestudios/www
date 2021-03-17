describe('Index', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has welcome message', () => {
    cy.get('h1').should('contain', 'Welcome to Next.js!');
  });
});
