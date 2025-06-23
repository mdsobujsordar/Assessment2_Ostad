const data = require('/cypress/fixtures/data.json');
class Q2 {
    baseURL() {
        cy.visit(data.URL);
    }
    login(){
        cy.get('#user-name').should('be.visible').type(data.users[1].username);
        cy.get('#password').should('be.visible').type(data.password);
        cy.get('#login-button').should('be.visible').click();
        // Verify the successful login by checking the presence of the inventory page
        cy.get('.inventory_list').should('be.visible');

         // Reset the app state
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('#reset_sidebar_link').should('be.visible').click();
        // Verify the reset by checking the presence of the inventory page again
        cy.get('.inventory_list').should('be.visible');
        // Verify the URL after reset
        cy.url().should('include', '/inventory.html');

    }
    addToCart() {
        // Add three items to the cart
        cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
        cy.get('.inventory_item').eq(1).find('.btn_inventory').click();
        cy.get('.inventory_item').eq(2).find('.btn_inventory').click();
        // Verify the cart count
        cy.get('.shopping_cart_badge').should('be.visible').should('have.text', '3');


    }
    navigateTocheckout() {
        // Navigate to the cart
        cy.get('.shopping_cart_link').should('be.visible').click();
        cy.get('.cart_list').should('be.visible');
        cy.get('#checkout').should('be.visible').click();
        cy.get('.checkout_info').should('be.visible');
        // Fill in the checkout form
        cy.get('#first-name').should('be.visible').type(data.firstName);
        cy.get('#last-name').should('be.visible').type(data.lastName);
        cy.get('#postal-code').should('be.visible').type(data.postalCode);
        // Click on the continue button
        cy.get('#continue').should('be.visible').click();
        // Verify the checkout overview page
        cy.get('.checkout_summary_container').should('be.visible');

        // verify the item names in the checkout overview
        cy.get('.inventory_item_name').should('have.length', 3);
        cy.get('.inventory_item_name').eq(0).should('contain.text', data.products[0].name);
        cy.get('.inventory_item_name').eq(1).should('contain.text', data.products[1].name);
        cy.get('.inventory_item_name').eq(2).should('contain.text', data.products[2].name);

        //verify the total price of the items
        cy.get('[data-test="total-label"]').should('be.visible').should('contain.text', data.totalPrice);
        // Click on the finish button
        cy.get('#finish').should('be.visible').click();
        // Verify the successful checkout by checking the presence of the order confirmation page
        cy.get('.complete-header').should('be.visible').should('contain.text', 'Thank you for your order!');
    }
    appStateReset() {
        // Reset the app state
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('#reset_sidebar_link').should('be.visible').click();
        // Verify the app state is reset by checking the cart count
        cy.get('.shopping_cart_badge').should('not.exist');
    }
    logOut() {
        // Click on the logout button
        cy.get('#logout_sidebar_link').should('be.visible').click();
        // Verify the successful logout by checking the presence of the login page
        cy.get('#login-button').should('be.visible');
    }
}
export default Q2;