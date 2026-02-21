Playwright BDD Automation Framework 🚀
A professional, scalable BDD automation framework for SauceDemo, built with Playwright, Cucumber (BDD), and TypeScript.

🚀 Project Overview
This repository follows a modular architecture designed for high stability and clear separation of concerns, as per the Quad Infotech assessment guidelines.

Mandatory Folder Responsibilities
/features: Contains Gherkin .feature files (Business logic only).

/steps: Step definitions. These act as "glue code" and contain zero selectors.

/pages: Page Object Model (POM) containing all locators and UI actions.

/support: Infrastructure including hooks.ts (screenshot on failure), DataManager (Data handling), and DbUtil (Mock DB).

/config: Environment-based configuration (URLs, Browser settings).

/testdata: Externalized JSON test data for data-driven testing.

🛠️ Setup & Execution
Install Dependencies: npm install

Install Browsers: npx playwright install chromium

Run All Tests: npm test (Runs in Headless mode by default for CI compatibility).

Change Browser/Headless Mode: * Local (Headed): HEADLESS=false npm test (Linux/macOS) or $env:HEADLESS="false"; npm test (Windows).

🧠 Engineering Assessment Q&A (Mandatory)
1. Why did you choose this framework structure?
I chose a Modular Layered Architecture. By separating Gherkin (Features), Glue Code (Steps), and Page Objects (Locators), I ensured a "Separation of Concerns." This allows the framework to scale; if the UI changes, I only update the Page Object. If the business logic changes, I only update the Feature file.

2. How does your wait strategy prevent flakiness?
I strictly follow Playwright’s Auto-waiting mechanism. I avoid "hard sleeps" (thread.sleep). Playwright performs actionability checks (visibility, stability, enablement) before every interaction. For the database validation, I implemented a polling mechanism to account for backend latency.

3. How does your locator strategy improve stability?
I follow a strict hierarchy:

Primary: Dedicated data-test attributes (e.g., data-test="add-to-cart"). These are "automation contracts" that do not change when CSS or layout changes.

Fallback: ARIA roles (e.g., getByRole('button')) to ensure accessibility and user-centric validation.

4. How would you scale this to 50+ scenarios?
Scaling would be achieved through:

Parallel Workers: Running features concurrently via Playwright workers.

Tag-based execution: Using @smoke or @regression tags to target specific suites.

Parameterized Steps: Reusing the When I login with {string} step across all 50 scenarios.

5. How would you execute this in CI/CD?
I implemented a GitHub Actions workflow (tests.yml). On every push:

A Linux runner provisions the environment.

It executes tests in Headless mode.

It captures and uploads screenshots on failure as artifacts for immediate debugging.

6. Two improvements you would make with more time.

API Seeding: I would use Playwright's request context to bypass the UI for test setup (e.g., creating the cart state via API) to significantly increase execution speed.

Allure Reporting: I would integrate advanced HTML reporting to provide stakeholders with visual execution trends and video recordings.

🤖 AI Disclosure (Mandatory Requirement)
AI Tool Used: Google Gemini.

Assisted Parts: Scaffolding the DataManager pattern, generating the GitHub Actions YAML, and troubleshooting the Linux "Missing X Server" error for headless execution.

Modifications: I manually refactored the Step Definitions to ensure clean parameterization of the userKey and modified the Before hooks to toggle headless mode dynamically based on the process.env.CI variable.

📝 Assumptions
Mock Database: Per the assessment requirements, the DbUtil simulates a database connection to demonstrate backend validation logic.

CI Environment: The framework assumes an Ubuntu-based runner for GitHub Actions.

Data Persistence: The "standard_user" and "locked_out_user" are used to demonstrate successful and failed authentication flows respectively.