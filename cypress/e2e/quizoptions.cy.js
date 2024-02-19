describe('Click through quiz options', () => {
  it('Click', () => {
    cy.visit('http://localhost:3000/quiz')

    cy.get('#topic').select('golang').should('have.value', 'golang')
    .select('aws').should('have.value', 'aws')
    .select('javascript').should('have.value', 'javascript')
    .select('CI/CD').should('have.value', 'ci/cd')
    .select('golang').should('have.value', 'golang')
    .select('home gardens').should('have.value', 'growing you own garden') 
    .select('coffee').should('have.value', 'coffee') 
    .select('finger foods').should('have.value', 'finger food')

    cy.get('#expertise').select('novice').should('have.value', 'novice')
    .select('intermediate').should('have.value', 'intermediate')  
    .select('expert').should('have.value', 'expert')

    cy.get('#numquestions').select('5').should('have.value', '5')
    .select('10').should('have.value', '10')
    .select('15').should('have.value', '15')

    cy.get('#questionstyle').select('master oogway').should('have.value', 'master oogway')
    .select("1940's gangster").should('have.value', "1940's gangster")
    .select("like I'm an 8 year old").should('have.value', "like i'm an 8 year old")
    .select('normal').should('have.value', 'normal')
    .select('jedi').should('have.value', 'master yoda')
    .select('captain jack sparrow').should('have.value', 'captain jack sparrow')
    .select('matthew mcconaughey').should('have.value', 'matthew mcconaughey')
  })
})