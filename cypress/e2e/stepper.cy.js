describe('Stepper', () => {

    beforeEach(()=> {
        cy.visit('/pages/layout/stepper')
    })
    it('should have expected text on each step', () => {
       cy.get('nb-stepper[orientation="horizontal"]').as('upperStepsContainer')
       cy.get('@upperStepsContainer').find('.header').find('.step').as('stepContainer')
       cy.get('@stepContainer').should('have.length', 4)

       cy.get('@stepContainer').eq(0).should('have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(1).should('not.have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(2).should('not.have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(3).should('not.have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@upperStepsContainer').find('h3').should("have.text", "Step content #1")
    
       cy.get('@upperStepsContainer').find('button').contains("prev").should("be.disabled")
       cy.get('@upperStepsContainer').find('button').contains("next").click()
       cy.get('@upperStepsContainer').find('h3').should("have.text", "Step content #2")
       cy.get('@stepContainer').eq(0).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(1).should('have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(2).should('not.have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(3).should('not.have.class', 'selected').and('not.have.class', 'completed')

       cy.get('@upperStepsContainer').find('button').contains("prev").should("be.enabled")
       cy.get('@upperStepsContainer').find('button').contains("next").click()
       cy.get('@upperStepsContainer').find('h3').should("have.text", "Step content #3")
       cy.get('@stepContainer').eq(0).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(1).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(2).should('have.class', 'selected').and('not.have.class', 'completed')
       cy.get('@stepContainer').eq(3).should('not.have.class', 'selected').and('not.have.class', 'completed')

       cy.get('@upperStepsContainer').find('button').contains("prev").should("be.enabled")
       cy.get('@upperStepsContainer').find('button').contains("next").click()
       cy.get('@upperStepsContainer').find('h3').should("have.text", "Step content #4")
       cy.get('@stepContainer').eq(0).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(1).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(2).should('not.have.class', 'selected').and('have.class', 'completed')
       cy.get('@stepContainer').eq(3).should('have.class', 'selected').and('not.have.class', 'completed')

       cy.get('@upperStepsContainer').find('button').contains("prev").should("be.enabled")
       cy.get('@upperStepsContainer').find('button').contains("next").should("be.disabled")
    })
  })