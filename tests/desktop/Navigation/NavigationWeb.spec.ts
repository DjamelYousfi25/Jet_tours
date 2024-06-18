import { test, expect } from '@playwright/test';
import { TestContext, describe } from 'node:test';

describe('Navigation to site',()=>{

  test('Navigation 1', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://www.jettours.com/');
    await page.getByText('Accepter et fermer').click();
    await page.waitForTimeout(1500);
    await page.locator('#main-menu > ul > li:nth-child(1) > span').click();
    await page.locator('#main-menu > ul > li:nth-child(1) > ul > li.grey_box > ul > li:nth-child(1) > a').click();
    await page.waitForTimeout(2000);
    await page.waitForSelector("#main-menu > ul > li:nth-child(2) > span");
    await page.waitForTimeout(1500);
    await page.locator('#main-menu > ul > li:nth-child(2) > span').click();
    await page.waitForSelector("#main-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(2) > a");
    await page.locator('#main-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(2) > a').click();
    await page.waitForSelector("#main-menu > ul > li:nth-child(3) > span");
    await page.waitForTimeout(1500);
    await page.locator('#main-menu > ul > li:nth-child(3) > span').click();
    await page.waitForSelector('#main-menu > ul > li:nth-child(4) > span');
    await page.locator('#main-menu > ul > li:nth-child(4) > span').click();
    await page.locator('#main-menu > ul > li.icon.dropdown.expand > span').click();
    await expect(page.locator('#main-menu > ul > li:nth-child(3) > span')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Kappa Club, l’expérience du club ouvert sur la découverte');
    await expect(page.getByPlaceholder('JJ/MM/AAAA')).toHaveValue('Date de départ');
    page.close();
  });
  
  

})
