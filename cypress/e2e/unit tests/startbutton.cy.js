describe('Tests the start button', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Start Quiz Here').click()
        cy.url().should('include', '/quiz')
        cy.contains('Quiz Generation Options').should('exist')
    })
  })