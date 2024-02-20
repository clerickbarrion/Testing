describe('Generates quiz', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/quiz')

    cy.get('#btn-categories').click()
    cy.url().should('include', '/quiz')
    cy.contains('Question 1', { timeout: 150000 }).should('exist')
  })
})