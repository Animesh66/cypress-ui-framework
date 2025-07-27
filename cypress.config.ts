import { defineConfig } from 'cypress'

export default defineConfig({
  // Your Cypress configuration here
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },

})
