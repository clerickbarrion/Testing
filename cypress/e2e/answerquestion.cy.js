describe('Answers 5 quiz questions', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/quiz')
      cy.get('#btn-categories').click()
      for (let i = 0; i < 5; i++) {
        cy.get('#userAnswer', { timeout: 150000 }).click().type('i dont know')
        cy.contains('Submit Answer').click()
        cy.contains('Next', {timeout: 150000}).click()
      }
      cy.contains('You scored a 3 out of 5! Good job!').should('exist')
    })
  })