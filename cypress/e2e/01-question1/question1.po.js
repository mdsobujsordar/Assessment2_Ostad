const data = require('/cypress/fixtures/data.json');
class Q1 {
    baseURL() {
        cy.visit(data.URL);
    }
    errorLogin(){
        cy.get('#user-name').should('be.visible').type(data.users[0].username);
        cy.get('#password').should('be.visible').type(data.password);
        cy.get('#login-button').should('be.visible').click();

        // Verify the error message
        cy.get('[data-test="error"]').should('be.visible').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
}
export default Q1;