import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/ebike/s?k=ebike');
  const links = await page.$$('h2 a.a-link-normal');  
  links[0].click();
});