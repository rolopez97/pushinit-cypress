const { defineConfig } = require("cypress");
require('dotenv').config(); // <- esto carga tu .env

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      PUSHING_IT_USER: process.env.PUSHINIT_USER,
      PUSHING_IT_PASS: process.env.PUSHINIT_PASS
    }
  },
});
