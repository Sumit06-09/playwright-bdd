Playwright BDD Automation Framework
A professional-grade test automation framework for SauceDemo, built using Playwright, Cucumber (BDD), and TypeScript.

🚀 Project Status
Note: Tests are fully integrated with GitHub Actions and run automatically on every push.

🛠️ Tech Stack
Language: TypeScript

Test Runner: Playwright

BDD Tool: Cucumber.js

CI/CD: GitHub Actions (Node 20 environment)

🏗️ Framework Architecture
This project implements a highly scalable architecture:

1. DataManager Pattern
Instead of hardcoding data or importing raw JSON into step definitions, I implemented a DataManager class.

Encapsulation: All JSON parsing logic is hidden.

Type Safety: Uses TypeScript getters (e.g., dm.username) to prevent runtime errors.

Maintainability: Adding a new test user only requires an entry in user.data.json.

2. Page Object Model (POM)
Separates UI locators from test logic, ensuring that if the website UI changes, only the Page class needs an update.

3. Database Mocking
Included a DbUtil class to demonstrate the ability to perform backend validation (e.g., verifying order status in a database) alongside UI tests.

📁 Folder Structure
Plaintext
├── .github/workflows/   # CI/CD (GitHub Actions)
├── features/            # Gherkin Business Scenarios
├── pages/               # Page Objects (UI Locators/Actions)
├── steps/               # Step Definitions
├── support/             # DataManager, Hooks, and DbUtil
└── testdata/            # External JSON Data
⚙️ Local Setup
Clone & Install:

Bash
git clone https://github.com/Sumit06-09/playwright-bdd.git
cd playwright-bdd
npm install
Install Browsers:

Bash
npx playwright install chromium
Run Tests:

Bash
npm test
🤖 AI Disclosure & Assumptions
AI Disclosure: AI was used to assist in architectural optimization (specifically the DataManager pattern) and troubleshooting environment mismatches between Windows and Linux (GitHub Actions).

Assumptions: The database validation is currently mocked via DbUtil to demonstrate the end-to-end flow without requiring a live database connection.
