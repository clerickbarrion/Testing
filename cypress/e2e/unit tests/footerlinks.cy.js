describe('Test links on the footer', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Home').click()
        cy.url().should('include', '/')
        cy.contains('Quiz Generator').click()
        cy.url().should('include', '/quiz')
        cy.contains('Account').click()
        cy.url().should('include', '/account')
    })
  })