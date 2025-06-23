# Cypress_Setup

1. Install NodeJS [Check Node Version node -v]
2. Install NPM [Check NPM Version npm -v]
3. Open the folder through VS Code
4. Open Terminal and run the following commands
5. npm init -y [Initialize the project]
6. npm install cypress [Install Cypress]
7. npx  cypress -v [Check Cypress Version]
8. npx cypress verify [Verify Cypress Installation]
9. npx cypress open [Open Cypress to run test in GUI]

# Allure_Setup
1. npm install --save-dev cypress @shelex/cypress-allure-plugin []

# Run_suites
1. npx cypress run --headed --browser chrome --env allure=true [Run All Tests with Chrome Browser in headed mode]
2. npx cypress run --headed --browser chrome --spec cypress/e2e/01-question1/question1.cy.js --env allure=true  [To run question1 in headed mode with chrome browser]
3. npx cypress run --headed --browser chrome --spec cypress/e2e/02-question2/question2.cy.js --env allure=true  [To run question2 in headed mode with chrome browser]
4. npx cypress run --headed --browser chrome --spec cypress/e2e/03-question3/question3.cy.js --env allure=true  [To run question3 in headed mode with chrome browser]

# Generate_Report_(Run_these_commands_after_running_every_suite)
1. npx allure generate allure-results --clean -o allure-report
2. npx allure open allure-report



# Working_Files_and_Folders
1. e2e [To write All Tests]
2. Fixtures >> JSON file [For constant values]
3. PageObjects [For Page Object Model]
4. Support >> Commands.js [For Base Settings]
5. cypress.conf.js [For Test Run Related Configuration]
6. npx cypress run --e2e --headed --reporter mochawesome [Run with generate Mocha reports]
7. cypress/test-report/*.json > cypress/test-report/output.json