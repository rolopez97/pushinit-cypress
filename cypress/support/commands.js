
Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('#registertoggle').dblclick()
    cy.get('#user').type(username);
    cy.get('#pass').type(password);
    cy.get('#submitForm').click()
});

Cypress.Commands.add('logOut', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});