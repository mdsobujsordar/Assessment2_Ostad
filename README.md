# Assessment2_cypress_setup

1. Install NodeJS [Check Node Version node -v]
2. Install NPM [Check NPM Version npm -v]
3. Open the folder through VS Code
4. Open Terminal and run the following commands
5. npm init -y [Initialize the project]
6. npm install cypress -–save-dev [Install Cypress]
7. npx  cypress -v [Check Cypress Version]
8. npx cypress verify [Verify Cypress Installation]
9. npx cypress open [Open Cypress to run test in GUI]
<!-- 10. npm install --save-dev cypress-file-upload -->
<!-- 11. npm install --save-dev cypress-mochawesome-reporter [It will download the dependency to generate Mochawesome report] -->
12. npm install --save-dev cypress-terminal-report [It will download the dependency to print logs on terminal]
13. npx cypress run e2e [Run All Tests with Browser Headless]
14. npx cypress run --headed --browser chrome --spec cypress/e2e/01-form-submission-validation/form-submission-validation.cy.js  [To run specific suit in headed mode with chrome browser]
15. npx cypress run --headed --browser chrome --spec cypress/e2e/01-form-submission-validation/form-submission-validation.cy.js, cypress/e2e/02-filter-validation/filter-validation.cy.js  [To run all the suits in this project with chrome browser in headed mode]
16. npx cypress run --browser chrome [Run in Chrome Browser]
17. npx cypress run e2e --headed [Run with Browser Head AND WILL GENERATE HTML REPORT]
18. Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
19. npx cypress run --record


# Working Files and Folders
1. e2e [To write All Tests]
2. Fixtures >> JSON file [For constant values]
3. PageObjects [For Page Object Model]
4. Support >> Commands.js [For Base Settings]
5. cypress.conf.js [For Test Run Related Configuration]
6. npx cypress run --e2e --headed --reporter mochawesome [Run with generate Mocha reports]
7. cypress/test-report/*.json > cypress/test-report/output.json