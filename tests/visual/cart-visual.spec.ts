import { test, expect } from '@playwright/test';

test.beforeEach(async ({page }) =>{
    await page.goto('https://raider-test-site.onrender.com/');
});

test.only('Checking Cart UI with no products', {tag: '@visual' }, async ({page}) =>{
    await expect(page).toHaveScreenshot('EmptyCart.png', 
        {
            fullPage: true,
            maxDiffPixelRatio: 0.01
        })
})

test.only('Checking Cart UI with Bronzer product', {tag: '@visual' }, async ({page}) =>{
    await expect(page).toHaveScreenshot('CartWWithProd1.png', 
        {
            fullPage: true,
            maxDiffPixelRatio: 0.01
        })
})