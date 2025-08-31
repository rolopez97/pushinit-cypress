describe("Form Utils", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

    it("waits fifteen seconds", () => {
        cy.get('#waitslink').click()
        cy.get('#wait').dblclick()
        cy.get('#description').should('contain', 'Once you doble click the button, you will see a loading mask during 10 seconds')
        cy.get('.chakra-progress__indicator').should('exist');
        cy.get('.chakra-progress__indicator', { timeout: 30000 }).should('not.exist');
        cy.get('#message').should('contain.text', 'You have waited for ten seconds, CONGRATULATIONS')
        cy.get('#message', { timeout: 30000 }).should('contain.text', 'You are a man of patience and have waited fifteen seconds')

    })

})