/* global cy */

describe('E2E', function() {
    it('renders learn devops link', () => {
      cy.visit('http://localhost:3000/ci-cd-react-app')
      cy.contains(/learn aws/i)
    })

})

