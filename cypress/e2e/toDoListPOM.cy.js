import toDoListPage from "../pages/toDoListPage";

describe("To do list", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

    it("opens the to do list after login", () => {
        toDoListPage.clickToDoListLink();
        cy.url().should("eq", "https://pushing-it.vercel.app/home/todolist")
    })

    it("adds a to do item", () => {
        toDoListPage.clickToDoListLink();
        toDoListPage.addTask("First to do item")
        toDoListPage.verifyTaskExists("First to do item")        
    })

    it("checks completed tasks", () =>{
        toDoListPage.clickToDoListLink();
        toDoListPage.completeTask("First to do item")
        toDoListPage.verifyTaskExists("First to do item")
    })

    it("deletes a to do item", () => {
        toDoListPage.clickToDoListLink();
        toDoListPage.deletTask("First to do item");
    })
})