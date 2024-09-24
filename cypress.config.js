const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
/*
Cypress.config('experimentalSessionSupport', true)

let sessionCallCount = 0;

Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload

before(() => {                   
  cy.session('mySession', () => {     
    cy.visit('https://fusemachines-dev.squadery.com/login', {
      onBeforeLoad: (window) => {
        window.sessionStorage.setItem('testapr6@yopmail.com', 'Test@123')
        sessionCallCount++
      }
    })
  })
})
*/


