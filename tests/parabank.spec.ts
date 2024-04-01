import { test, expect } from './fixture';
 
test.describe('Para Bank - Home Page Suite', () => {
    test('services should be visible', async ({ homePage, page }) => {
        await expect(homePage.atmServices).toBeVisible();
        await expect(page.getByText('Withdraw Funds', { exact: true })).toBeVisible();
        await expect(page.getByText('Transfer Funds', { exact: true })).toBeVisible();

        await expect(homePage.onlineServices).toBeVisible();
        await expect(page.getByText('Bill Pay', { exact: true })).toBeVisible();
        await expect(page.getByText('Account History', { exact: true })).toBeVisible();
    });
 
    test('should allow me to open read more page', async ({ homePage, page }) => {
        await homePage.clickOnReadMoreLink();

        await expect(page).toHaveTitle("CXF - Service list")
        await expect(page.getByRole('heading', { name: 'Bookstore services:' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Available ParaBank SOAP services:' })).toBeVisible();
    });

    test('should allow me to login from home page', async ({ homePage, basePage, page }) => {
        await homePage.login("test@test.com", "Test1234");

        await expect(page).toHaveTitle("Account Overview");
        await expect(basePage.aboutButton).toBeVisible();
        await expect(basePage.contactButton).toBeVisible();
    });
});