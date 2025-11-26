import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
// Set RECORD_ALL=1 to capture screenshots/videos/traces for *both* pass & fail (useful in CI)
const recordAll = process.env.RECORD_ALL === "1";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,

  reporter: [["html", { open: isCI ? "never" : "on-failure" }], ["line"]],

  use: {
    baseURL: process.env.BASE_URL || "https://example.com",
    headless: isCI ? true : false, // headed locally, headless in CI
    launchOptions: { slowMo: isCI ? 0 : 500 }, // nice for live authoring
    ignoreHTTPSErrors: true,

    // Artifacts (pass + fail if RECORD_ALL=1, else only on failure)
    screenshot: recordAll ? "on" : "only-on-failure",
    video: recordAll ? "on" : "retain-on-failure",
    trace: recordAll ? "on" : "retain-on-failure",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    // To use real Chrome locally, you can add:
    // { name: 'Google Chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],
});
