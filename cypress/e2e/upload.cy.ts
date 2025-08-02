describe('Policy analysis flow', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('Home Cover GPT').should('exist')
  })

  it('uploads PDF and shows results', () => {
    cy.visit('/')
    cy.get('[data-testid="file-input"]').attachFile('sample.pdf')
    cy.wait(1000) // Wait for file processing
    cy.get('label[for="consent"]').click()
    cy.wait(500) // Wait for state update
    cy.intercept('POST', '/api/parse', { 
      data: { 
        coverageSummary:['X'], 
        risks:['Y'], 
        recommendations:['Z'] 
      } 
    })
    cy.get('[data-testid="analyze-button"]').click({ force: true })
    cy.contains('Coverage Summary').should('exist')
  })

  it('handles PDF parsing error', () => {
    cy.visit('/')
    cy.get('[data-testid="file-input"]').attachFile('sample.pdf')
    cy.wait(1000) // Wait for file processing
    cy.get('label[for="consent"]').click()
    cy.wait(500) // Wait for state update
    cy.intercept('POST', '/api/parse', { 
      statusCode: 500,
      body: { error: 'Failed to parse PDF.' }
    })
    cy.get('[data-testid="analyze-button"]').click({ force: true })
    cy.contains('Failed to parse PDF').should('exist')
  })
})