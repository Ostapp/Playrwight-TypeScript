import { test, expect } from '@playwright/test';
import { EAAppHomePage } from '../pageObjects/EAAppHomePage';
import EAAppLoginEmployeePage from '../pageObjects/EAAppLoginPage';

test.describe('Log in', async () => {

  test('should navigate to Log In page', async ({ page }) => {
    const landingPage = new EAAppHomePage(page);
    await landingPage.goto();
    await landingPage.clickLogin();
    
    await expect(page).toHaveURL('/Account/Login');
  });

  test('should Log In', async ({ page }) => {
    const loginPage = new EAAppLoginEmployeePage(page);
    await loginPage.goto();
    await loginPage.setUserName("Ostap12");
    await loginPage.setPassword("Random123!");
    await loginPage.clickLogin();

    await expect(page).toHaveURL('/'); 
  });

});
