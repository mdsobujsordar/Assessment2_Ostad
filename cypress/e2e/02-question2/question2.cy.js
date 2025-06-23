import Q2 from "./question2.po"
describe('Solution of Question2', function(){
    const action = new Q2();
    beforeEach(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('It will buy 3 products with standard_user credential', function(){
        action.baseURL();
        action.login();
        action.addToCart();
        action.navigateTocheckout();
        action.appStateReset();
        action.logOut();
    })
})