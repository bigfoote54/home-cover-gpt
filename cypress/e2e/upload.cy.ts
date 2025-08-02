describe('Policy analysis flow', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('Home Cover GPT').should('exist')
  })

  it('uploads PDF and shows results', () => {
    cy.visit('/')
    cy.get('[data-testid="file-input"]').attachFile('sample.pdf')
    cy.get('#consent').check()
    cy.intercept('POST', '/api/parse', { coverageSummary:['X'], risks:['Y'], recommendations:['Z'] })
    cy.get('[data-testid="analyze-button"]').click()
    cy.contains('Coverage Summary').should('exist')
  })
})