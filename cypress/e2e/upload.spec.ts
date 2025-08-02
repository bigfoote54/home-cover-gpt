describe('Policy analysis flow', () => {
  it('uploads PDF and shows results', () => {
    cy.visit('/')
    cy.get('[data-testid="file-input"]').attachFile('sample.pdf')
    cy.intercept('POST', '/api/parse', { coverageSummary:['X'], risks:['Y'], recommendations:['Z'] })
    cy.get('button').contains(/run analysis/i).click()
    cy.contains('Coverage Summary').should('exist')
  })
})