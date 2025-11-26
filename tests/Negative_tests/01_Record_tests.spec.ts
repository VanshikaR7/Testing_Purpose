import { test, expect } from "@playwright/test";

test("login negative test", async ({ page }) => {
  test.fail(process.env.CI === "true", "Known negative case while exploring");
  await test.step("Navigating to url", async () => {
    await page.goto("https://www.saucedemo.com/");
  });

  await test.step("Enter Username & Password", async () => {
    await page.getByPlaceholder("Username").fill("invalid");
    await page.getByPlaceholder("Password").fill("password");
  });

  await test.step("Click on Sign in", async () => {
    await page.getByRole("button", { name: "Login" }).click();
  });

  await test.step("Validate error message", async () => {
    await expect(
      page.getByText("test Username and password do not match")
    ).toBeVisible();
  });
});
