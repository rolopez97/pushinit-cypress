describe("To do list", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

    it("opens the to do list after login", () => {
        cy.get("#todolistlink").click()
        cy.url().should("eq", "https://pushing-it.vercel.app/home/todolist")
    })

    it("adds a to do item", () => {
        cy.get('[data-cy="todolistlink"]').click()
        cy.get("#task").type("First to do item")
        cy.get("#sendTask").click()                

    })

    it("deletes a to do item", () => {
        cy.get('[data-cy="todolistlink"]').click()
        cy.get("#task").type("First to do item")
        cy.get("#sendTask").click()                
        cy.contains('button', 'Delete').click()

    })
})