import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '4a4him',
  // Your Cypress configuration here
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demowebshop.tricentis.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{ts,js,tsx,jsx}',
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    
  },

})
