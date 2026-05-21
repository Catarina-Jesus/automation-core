//example gave in class
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page }) =>{
    await page.goto('https://raider-test-site.onrender.com/');
});

test ('Product can be added to cart from the Homepage', async ({page}) =>{
    await page.locator('.product-card').filter({hasText: 'Skinsheen Bronzer Stick'}). getByRole('button', {name: 'Add to cart'}).click()
    await expect(page.getByRole('link', {name: /Cart/ })).toContainText('1 item(s)')
})

