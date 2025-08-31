describe("Log in", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
    })

    it("has a visible image", function (){
        cy.get('img[alt="pushingIT"]').should('be.visible')
    })

    it("url is pushin-it.vercel.app", () => {
        cy.url().should("eq", "https://pushing-it.vercel.app/")
    })

    it("shows error when password is invalid", ()=>{
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type(Cypress.env('PUSHING_IT_USER'));
        cy.get('#pass').type('incorrectpasword');
        cy.get('#submitForm').click()
        cy.get('#errorMessage').should("contain.text", "Password must have a special character and a number" )
    })

    it("logs in successfully with correct credentials", () => {
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

})