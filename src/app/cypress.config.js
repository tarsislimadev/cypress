// https://docs.cypress.io/guides/references/legacy-configuration#Global

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 600,
  viewportWidth: 800,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "http://localhost",
    setupNodeEvents(on, config) { },
  },
});
