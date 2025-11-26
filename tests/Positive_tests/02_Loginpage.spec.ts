// tests/Chapters/02_Loginpage.spec.ts
import { test, expect } from "@playwright/test";

/**
 * Uses env vars injected via GitHub Secrets in CI and your local shell when authoring:
 *  - BASE_URL
 *  - USERNAME
 *  - PASSWORD
 * Local authoring tip: run headed to watch the browser:
 *  - npm run test:headed
 *  - npm run test:file -- tests/Chapters/02_Loginpage.spec.ts
 */

test("Login Page test case", async ({ page }) => {
  // Navigate
  const base = process.env.BASE_URL ?? "https://example.com";
  await page.goto(base, { waitUntil: "domcontentloaded" });

  // Interact
  const uname = process.env.USERNAME ?? "";
  const pwd = process.env.PASSWORD ?? "";

  await page.getByRole("textbox", { name: "LDAP Username" }).isVisible();
  await page.getByRole("textbox", { name: "LDAP Username" }).fill(uname);
  await page.getByRole("textbox", { name: "LDAP Password" }).fill(pwd);
  await page.getByRole("button", { name: "Submit" }).click();

  // Validate
  await expect(page).toHaveTitle(/Nudgebee/i, { timeout: 15000 });

  // Optional screenshots (folder name kept as in your repo)
  await page
    .getByText("Home")
    .screenshot({ path: "./screenshot/HomepageScreenshot.png" });
  await page.screenshot({
    path: "./screenshot/FullHomepageScreenshot.png",
    fullPage: true,
  });
});
