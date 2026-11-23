import { test, expect } from '@playwright/test';

test.beforeEach(async ({page }) =>{
    await page.goto('https://raider-test-site.onrender.com/');
});

test.only('Checking Product Page UI for BENefit Girl Meets Pearl', {tag: '@visual' }, async ({page}) =>{
    await expect(page).toHaveScreenshot('Prod2.png', 
        {
            fullPage: true,
            maxDiffPixelRatio: 0.01
        })
})