//Import playwroght module
import { test, expect } from "@playwright/test";

//Creating a test for login page (write a test)
test("Login Page test case", async ({ page }) => {
  //Navigate to the URL
  await page.goto("https://test.nudgebee.pollux.in", {
    waitUntil: "domcontentloaded",
  });

  //search keyword and click on submit button
  await page.getByRole("textbox", { name: "LDAP Username" }).isVisible();
  await page
    .getByRole("textbox", { name: "LDAP Username" })
    .fill("raman.kharche01");
  await page.getByRole("textbox", { name: "LDAP Username" }).isVisible();
  await page.getByRole("textbox", { name: "LDAP Password" }).fill("Test!12345");
  await page.getByRole("button", { name: "Submit" }).click();

  //Validate home page after login
  await expect(page).toHaveTitle("Nudgebee");
  await page
    .getByText("Home")
    .screenshot({ path: "./screenshot/HomepageScreentshot.png" });
  await page.screenshot({ path: "./screenshot/FullHomepageScreentshot.png" });
});
