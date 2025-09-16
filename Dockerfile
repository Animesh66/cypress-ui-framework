# ---------- Stage 1: Test Runner + Report Builder ----------
# Includes Cypress + Chrome matching Cypress ^15
FROM cypress/included:15.0.0 AS builder

WORKDIR /e2e

# Install Java required by Allure CLI
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    default-jre \
    && rm -rf /var/lib/apt/lists/*

# Ensure Cypress cache path and CI mode
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress
ENV CI=1

# Copy manifests first to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Optional diagnostics
RUN npx cypress --version && node --version && npm --version

# Allow choosing whether to continue on test failure (default false)
#   docker build --build-arg CONTINUE_ON_FAIL=true ...
ARG CONTINUE_ON_FAIL=false
SHELL ["/bin/bash", "-lc"]

# Run tests and generate Allure report
# If CONTINUE_ON_FAIL=true, do not fail the build on test errors.
RUN if [[ "${CONTINUE_ON_FAIL}" == "true" ]]; then \
      echo "Running tests with CONTINUE_ON_FAIL=true"; \
      npm run test || true; \
      npm run test:visual || true; \
    else \
      echo "Running tests with CONTINUE_ON_FAIL=false (fail build on test failures)"; \
      npm run test && npm run test:visual; \
    fi \
    && npx allure generate allure-results --clean -o allure-report || true

# ---------- Stage 2: Lightweight web server to serve the report ----------
FROM nginx:alpine AS report

# Copy the generated Allure report from the builder stage
COPY --from=builder /e2e/allure-report /usr/share/nginx/html

# Optionally ship raw results and snapshots (uncomment if you want them served too)
# RUN mkdir -p /usr/share/nginx/html/artifacts
# COPY --from=builder /e2e/allure-results /usr/share/nginx/html/artifacts/allure-results
# COPY --from=builder /e2e/cypress/snapshots /usr/share/nginx/html/artifacts/snapshots

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]