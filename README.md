Playwright BDD Automation Framework
This repository contains a professional-grade test automation framework for SauceDemo, built using Playwright, Cucumber (BDD), and TypeScript.

🚀 Key Features
BDD Integration: Gherkin-style feature files for clear business requirement mapping.

Page Object Model (POM): Scalable and maintainable structure for UI elements and actions.

DataManager Pattern: Externalized test data in JSON format with TypeScript Getters for clean, type-safe data access.

Database Mocking: Simulated database validation for order status verification.

CI/CD Pipeline: Fully integrated with GitHub Actions to run tests automatically on every push.

🛠️ Tech Stack
Language: TypeScript

Test Runner: Playwright

BDD Tool: Cucumber.js

CI/CD: GitHub Actions

📁 Project Structure
Plaintext
├── .github/workflows/   # CI/CD pipeline configuration
├── features/            # Gherkin feature files
├── pages/               # Page Object Model classes
├── steps/               # Step definitions connecting Gherkin to code
├── support/             
│   ├── dataManager.ts   # Logic for external JSON data handling
│   ├── dbUtil.ts        # Database verification utility (Mock)
│   └── hooks.ts         # Browser setup and teardown
└── testdata/            # External JSON test data files
⚙️ Setup and Installation
Clone the repository:

Bash
git clone <your-repo-url>
cd <your-repo-folder>
Install dependencies:

Bash
npm install
Install Playwright Browsers:

Bash
npx playwright install chromium
Run Tests:

Bash
npm test
📊 Framework Design Decisions
1. DataManager Pattern (External Data)
I implemented a DataManager class to handle external JSON data. This approach uses TypeScript Getters, ensuring that step definitions remain clean and readable. Instead of parsing JSON inside the test logic, we simply call dm.username or dm.firstName. This makes the framework highly scalable.

2. Database Validation
The framework includes a DbUtil class to demonstrate the ability to perform end-to-end verification beyond the UI. It mocks a database check to ensure that the order status has been updated correctly in the backend.

3. CI/CD Integration
A GitHub Actions workflow is configured to run regression tests on every pull request or push to the main branch, ensuring code quality and immediate feedback.

🤖 AI Disclosure & Assumptions
AI Disclosure: AI tools were used to assist in architectural decision-making, specifically in optimizing the DataManager pattern and troubleshooting TypeScript configuration for JSON module resolution.

Assumptions: * The test focuses on the "Standard User" happy path for the Sauce Labs Backpack.

Database verification is performed via a mock utility as a placeholder for real DB connectivity.