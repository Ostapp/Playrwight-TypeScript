import { test, expect } from '@playwright/test';
import { EAAppHomePage } from '../pageObjects/EAAppHomePage';
import { EAAppRegisterPage } from '../pageObjects/EAAppRegisterPage';
import { NewUser } from '../Helpers/Models/NewUser';

test.describe('Registration', async () => {

  test('should navigate to registration page', async ({ page }) => {
    const landingPage = new EAAppHomePage(page);
    await landingPage.goto();
    await landingPage.clickRegister();
    
    await expect(page).toHaveURL('/Account/Register');
  });

  test('should register a new user', async ({ page }) => {
    const registerPage = new EAAppRegisterPage(page);
    const newUser =  new NewUser();
    
    await registerPage.goto();
    await registerPage.setUserName(newUser.userName);
    await registerPage.setEmail(newUser.email);
    await registerPage.setPassword(newUser.password);
    await registerPage.setConfirmPassword(newUser.password);
    await registerPage.clickRegister();

    await expect(page).toHaveURL('/'); 
  });

});
