import { test, expect } from '@playwright/test';
import { invalidUserData, validUserData } from '../userData';

test.beforeEach(async ({page }) =>{
    await page.goto('https://raider-test-site.onrender.com');
});

test ('Login is successful', async ({page}) =>{
 
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name' }).fill(validUserData.customer.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(validUserData.customer.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Welcome back Bob Bobby')).toBeVisible();
})

test ('Wrong password fails login', async ({page}) =>{
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name' }).fill(invalidUserData.wrongPassword.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(invalidUserData.wrongPassword.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Error: Incorrect login or password provided.')).toBeVisible();
})


