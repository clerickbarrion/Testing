describe('Generates a javascript quiz', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/quiz')
        cy.get('#topic').select('javascript').should('have.value', 'javascript')
        cy.get('#btn-categories').click()
        cy.url().should('include', '/quiz')
    })
  })