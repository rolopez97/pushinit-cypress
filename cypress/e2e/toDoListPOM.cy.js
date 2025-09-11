import toDoListPage from "../pages/toDoListPage";

describe("To do list", () => {
    beforeEach(function (){
        cy.fixture('toDoData').as('data');
        cy.visit("https://www.pushing-it.vercel.app/");
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

    it("opens the to do list after login", function () {
        toDoListPage.clickToDoListLink();
        cy.url().should("eq", "https://pushing-it.vercel.app/home/todolist")
    })

    it("adds a to do item", function () {
        toDoListPage.clickToDoListLink();
        toDoListPage.addTask(this.data.taskName)
        toDoListPage.verifyTaskExists(this.data.taskName)        
    })

    it("checks completed tasks", function (){
        toDoListPage.clickToDoListLink();
        toDoListPage.completeTask(this.data.taskName)
        toDoListPage.verifyTaskExists(this.data.taskName)
    })

    it("deletes a to do item", function () {
        toDoListPage.clickToDoListLink();
        toDoListPage.deletTask(this.data.taskName);
    })
})