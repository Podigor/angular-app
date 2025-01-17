const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    defaultCommandTimeout: 5000,
    retries: { "runMode": 1, "openMode": 1 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
