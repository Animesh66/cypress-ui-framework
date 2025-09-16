import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression'
// @ts-ignore - Allure Cypress types are not properly exported
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  projectId: '4a4him',
  // Your Cypress configuration here
  reporter: 'allure-cypress',
  reporterOptions: {
    resultsDir: 'allure-results',
  },
  e2e: {
    env: {
      allure: true,
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: 'https://demowebshop.tricentis.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: ['cypress/e2e/**/*.{ts,js,tsx,jsx}', 'cypress/visual_regression/**/*.{ts,js,tsx,jsx}'],
    defaultCommandTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: {
      runMode: 1,
      openMode: 0
    }
    
  },

})
