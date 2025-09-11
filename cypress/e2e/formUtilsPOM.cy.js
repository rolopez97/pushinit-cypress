import formPage from "../pages/formPage";


describe("Form Utils", () => {
    beforeEach(function (){
        cy.visit("https://www.pushing-it.vercel.app/");
        cy.typeLogin(Cypress.env('PUSHING_IT_USER'), Cypress.env('PUSHING_IT_PASS'))
        cy.url().should("eq", "https://pushing-it.vercel.app/home")
    })

     it("displays the form and selects the date correctly", () => {
        formPage.clickFormUtilsLink();
        formPage.clickShowDatePicker();
        formPage.clearDate();
        formPage.typeDate('2025-09-11');

    })


})