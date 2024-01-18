import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/**
 * 1. open the page
 * 2. click at get started
 * 3. mouse hover the language dropdown
 * 4. click at java
 * 5. check the url
 * 6. check the text installing playwright is not bieng displayed
 * 7. check the text below si displayed
 * "Playwright is distributed as a set of Maven modules."
 */
test.only('check java page', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', {name: 'Get Started'}).click();
  await page.getByRole('button', {name:'Node.js'}).hover();
  await page.getByText('Java', {exact: true}).click();

  await expect(page).toHaveURL(/java/);
  await expect(page.getByText('Installing Playwright', {exact: true})).not.toBeVisible();
   
  const javaDescription = `Playwright is distributed as a set of Maven modules.`;
  await expect(page.getByText(javaDescription)).toBeVisible(); 

})
