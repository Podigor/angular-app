describe('Dialog', () => {

    beforeEach(()=> {
        cy.visit('/pages/modal-overlays/dialog')
    })
    it('should have expected data on name modal', () => {

        cy.get('.form-input-card').find('button').contains('Enter Name').click()

        cy.get('nb-dialog-container').as('enterNameDialogContainer')
        cy.get('@enterNameDialogContainer').should('be.visible')
        cy.get('@enterNameDialogContainer').find('nb-card-header').should('have.text', 'Enter your name')
        cy.get('@enterNameDialogContainer').find('input').should('be.visible').and('be.enabled')
        cy.get('@enterNameDialogContainer').find('button').contains('Cancel').should('be.visible').and('be.enabled')
        cy.get('@enterNameDialogContainer').find('button').contains('Submit').should('be.visible').and('be.enabled')
    })
  })