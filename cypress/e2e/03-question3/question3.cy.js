import Q3 from "./question3.po"
describe('Solution of Question3', function(){
    const action = new Q3();
    beforeEach(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('It will buy one product with performance_glitch_user credential', function(){
        action.baseURL();
        action.login();
        action.appStateReset();
        action.selectProduct();
        action.checkout();
        action.verifyProduct();
        action.appStateReset();
        action.logOut();
    })
})