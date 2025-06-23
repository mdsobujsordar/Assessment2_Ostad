import Q1 from "./question1.po"
describe('Solution of Question1', function(){
    const action = new Q1();
    beforeEach(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it('It will login with locked_out_user and verify the error message', function(){
        action.baseURL();
        action.errorLogin();
    })
})