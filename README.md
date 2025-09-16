Cypress UI Framework
End-to-end and visual regression test framework using Cypress 15, allure-cypress, and cypress-visual-regression.

E2E tests: cypress/e2e/
Visual regression tests: cypress/visual_regression/
Allure results: allure-results/
Combined Allure report: allure-report/
Visual snapshots:
Base: cypress/snapshots/base/
Actual: cypress/snapshots/actual/
Diff: cypress/snapshots/diff/
Note: Ensure your config and CI paths match the actual folder names. If you switch between cypress/snapshot/ and cypress/snapshots/, update both config and workflow consistently.

Tech Stack
Cypress ^15
allure-cypress ^3.3.3
allure-commandline ^2.29.0 (for generating reports)
cypress-visual-regression ^5.3.0
TypeScript ^5
Project Structure
cypress/
  e2e/
    demo-webshop/
      loginTest.spec.ts
      registrationTest.spec.ts
  visual_regression/
    visualRegression.spec.ts
  snapshots/
    base/
    actual/
    diff/
  support/
    e2e.ts
testData/
  data.ts
.github/
  workflows/
    regression.yaml
cypress.config.ts
package.json
Getting Started
Prerequisites
Node.js 20+ (recommended) or the version configured in your CI
Chrome/Chromium installed locally if you run tests outside containers
Java (for local Allure report generation via CLI)
Install dependencies
Run: npm ci
Open Cypress (interactive)
Run: npm run open
Running Tests
E2E tests (current script)
npm run test
Underlying: cypress run --spec=cypress/e2e/ --parallel --workers=2
Tip: If not using Cypress Cloud, consider simplifying to:
cypress run --spec 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
Visual regression tests
npm run test:visual
Underlying: cypress run --browser chrome --env visual=true --spec=cypress/visual_regression/
Baselines are stored in cypress/snapshots/base/. Actuals and diffs for each run go to cypress/snapshots/actual/ and cypress/snapshots/diff/.
Visual Regression Notes
Commands are registered in 
cypress/support/e2e.ts
 via:
addCompareSnapshotCommand() from cypress-visual-regression
import "allure-cypress"; for Allure integration
The helper stabilizeUI() in 
cypress/visual_regression/visualRegression.spec.ts
 disables animations and waits briefly to reduce flakiness before snapshots.
Allure Reporting
Results directory
Allure test results are written to allure-results/
Generate report locally
npm run generate:report → outputs to allure-report/
npm run open:report → opens Allure UI locally
CLI (alternative)
npx allure generate allure-results --clean -o allure-report
npx allure open
CI: GitHub Actions
Workflow file: 
.github/workflows/regression.yaml

Jobs
install
Checks out code, installs dependencies, uploads node_modules as an artifact for reuse
regression_test
Runs E2E tests
Uploads allure-results artifact
visual_regression
Runs visual tests
Optionally uploads visual artifacts:
visual-diffs from cypress/snapshots/diff/ (if any diffs)
visual-actual from cypress/snapshots/actual/ or cypress/snapshots/base/ (depending on configuration)
Uploads allure-results-visual artifact
generate_report
Downloads both allure artifacts into all-results/
Generates a combined Allure report into allure-report/
Uploads the allure-report artifact so you can download it from the Actions run
Common pitfalls
If allure-results isn’t uploaded:
Ensure specs actually ran (check Cypress summary)
Ensure Allure reporter is engaged (via CLI or config)
Ensure artifact upload path matches where results are generated
Visual diffs only appear when mismatches occur; conditional uploads avoid “no files found” noise
Docker (Optional)
Multi-stage Docker build to run tests and serve Allure report via Nginx:

Stage 1 (builder): Use cypress/included:15.0.0, install Java, install deps, run tests, generate Allure report
Stage 2 (runtime): Use nginx:alpine, copy allure-report/ to /usr/share/nginx/html, expose on port 80
Example outline:

FROM cypress/included:15.0.0 as builder
WORKDIR /e2e
RUN apt-get update && apt-get install -y default-jre
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run test || true && npm run test:visual || true
RUN npx allure generate allure-results --clean -o allure-report || true

FROM nginx:alpine
COPY --from=builder /e2e/allure-report /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
Build:

docker build -t yourorg/cypress-ui-framework:latest .
Run:

docker run -p 8080:80 yourorg/cypress-ui-framework:latest
Open http://localhost:8080
Troubleshooting
No allure-results produced
Ensure tests actually ran and reporter is active
Confirm the folder path (root vs nested) and match the artifact upload path
Visual diffs not uploaded
Diffs appear only on mismatches; uploads can be conditional
Flaky visuals
Use stabilizeUI() to disable animations
cy.get(...).should('be.visible') before snapshots
Consider brief cy.wait() after navigation to stabilize layout
Conventions
Base URL: 
cypress.config.ts
 baseUrl
Retries: 
cypress.config.ts
 retries
Viewports: visual spec iterates desktop/tablet/mobile
