import Q2 from "./question2.po"
const data = require('/cypress/fixtures/data.json');
describe('Solution of Question2', function(){
    const action = new Q2();
    beforeEach(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('It will login with standard_user and reset app state', function(){
        action.baseURL();
        action.login();
        action.addToCart();
        action.navigateTocheckout();
        action.appStateReset();
        action.logOut();
    })
})