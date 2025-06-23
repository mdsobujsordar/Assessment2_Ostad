const data = require('/cypress/fixtures/data.json');
class Q3 {
    baseURL() {
        cy.visit(data.URL);
    }
    login(){
        cy.get('#user-name').should('be.visible').type(data.users[2].username);
        cy.get('#password').should('be.visible').type(data.password);
        cy.get('#login-button').should('be.visible').click();
    }
    appStateReset() {
        // Reset the app state
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('#reset_sidebar_link').should('be.visible').click();
        // Verify the app state is reset by checking the cart count
        cy.get('.shopping_cart_badge').should('not.exist');
    }
    selectProduct() {
        // Filter items by name and select the first item
        cy.get('.product_sort_container').should('be.visible').select('Name (Z to A)');
        cy.get('.inventory_item').first().find('.btn_inventory').should('be.visible').click();

    }
    checkout() {
        // Navigate to the cart
        cy.get('.shopping_cart_link').should('be.visible').click();
        // Click on the checkout button
        cy.get('#checkout').should('be.visible').click();
        // Fill in the checkout form
        cy.get('#first-name').should('be.visible').type(data.firstName);
        cy.get('#last-name').should('be.visible').type(data.lastName);
        cy.get('#postal-code').should('be.visible').type(data.postalCode);
        // Click on the continue button
        cy.get('#continue').should('be.visible').click();
        // Verify the checkout overview page
        cy.get('.checkout_summary_container').should('be.visible');
    }
    verifyProduct() {
        // Verify the item name in the checkout overview
        cy.get('.inventory_item_name').should('have.length', 1);
        cy.get('.inventory_item_name').eq(0).should('contain.text', data.ZtoAfirstProduct);
        // Verify the total price of the items
        cy.get('[data-test="total-label"]').should('be.visible').should('contain.text', data.ZtoAfirstProductPrice);
        // Click on the finish button
        cy.get('#finish').should('be.visible').click();
        // Verify the successful checkout by checking the presence of the order confirmation page
        cy.get('.complete-header').should('be.visible').should('contain.text', 'Thank you for your order!');
    }
    logOut() {
        // Click on the logout button
        cy.get('#logout_sidebar_link').should('be.visible').click();
        // Verify the successful logout by checking the presence of the login page
        cy.get('#login-button').should('be.visible');
    }

}
export default Q3;