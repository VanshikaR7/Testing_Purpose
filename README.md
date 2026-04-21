# Testing Purpose

![Playwright CI/CD](https://github.com/VanshikaR7/Testing_Purpose/actions/workflows/playwright.yml/badge.svg)

## Project Description
This repository is a Playwright-based automated testing suite designed for web applications. It serves as a demonstration and practice environment for end-to-end (E2E) testing, covering various scenarios including login flows and UI validation.

## Purpose
The primary purpose of this project is to showcase automated testing capabilities using Playwright. It includes:
- Implementation of positive and negative test cases.
- Handling of environment variables for secure data management.
- Capturing and storing screenshots for visual verification.
- Integration with CI/CD pipelines (GitHub Actions).

## Features
- **Automated Login Tests**: Includes both successful login scenarios and negative test cases with error message validation.
- **Visual Testing**: Captures element-specific and full-page screenshots during test execution.
- **Flexible Execution**: Supports running tests in headed mode, UI mode, and headless mode for CI environments.
- **Environment Configuration**: Uses environment variables (`BASE_URL`, `USERNAME`, `PASSWORD`) to allow testing across different environments without hardcoding credentials.

## Usage Instructions

### Prerequisites
- Node.js installed on your machine.
- npm (Node Package Manager).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/VanshikaR7/Testing_Purpose.git
   cd Testing_Purpose
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests
- **Run all tests**:
  ```bash
  npm test
  ```
- **Run tests in Headed mode**:
  ```bash
  npm run test:headed
  ```
- **Run tests in UI mode**:
  ```bash
  npm run test:ui
  ```
- **Run a specific test file**:
  ```bash
  npm run test:file -- tests/Positive_tests/02_Loginpage.spec.ts
  ```

### Environment Variables
For tests that require authentication, ensure the following environment variables are set:
- `BASE_URL`: The URL of the application under test.
- `USERNAME`: The login username.
- `PASSWORD`: The login password.

Example:
```bash
BASE_URL=https://example.com USERNAME=myuser PASSWORD=mypass npm test
```

