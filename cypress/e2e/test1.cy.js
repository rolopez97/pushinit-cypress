

describe("Log in", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
    })

    it("should have a visible image", function (){
        cy.get('img[alt="pushingIT"]').should('be.visible')
    })

    it("URL should be pushin-it.vercel.app", () => {
        cy.url().should("eq", "https://pushing-it.vercel.app/")
    })

    it("should validate password and display an error", ()=>{
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type(Cypress.env('PUSHING_IT_USER'));
        cy.get('#pass').type('incorrectpasword');
        cy.get('#submitForm').click()
        cy.get('#errorMessage').should("contain.text", "Password must have a special character and a number" )
    })

    it("Should login succesfully", () => {
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

})