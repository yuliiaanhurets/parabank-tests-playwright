import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage.ts';
import { HomePage } from '../pages/homePage.ts';

test.beforeEach(async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.goTo();
});

test.describe('Para Bank - Home Page Suite', () => {
    test('services should be visible', async ({ page }) => {
        const homePage = new HomePage(page);
        await expect(homePage.atmServices).toBeVisible();
        await expect(page.getByText('Withdraw Funds', { exact: true })).toBeVisible();
        await expect(page.getByText('Transfer Funds', { exact: true })).toBeVisible();

        await expect(homePage.onlineServices).toBeVisible();
        await expect(page.getByText('Bill Pay', { exact: true })).toBeVisible();
        await expect(page.getByText('Account History', { exact: true })).toBeVisible();
    });

    test('should allow me to open read more page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickOnReadMoreLink();

        await expect(page).toHaveTitle("CXF - Service list")
        await expect(page.getByRole('heading', { name: 'Bookstore services:' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Available ParaBank SOAP services:' })).toBeVisible();
    });

    test('should allow me to login from home page', async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.login("test@test.com", "Test1234");

        await expect(page).toHaveTitle("Account Overview");
        await expect(basePage.aboutButton).toBeVisible();
        await expect(basePage.contactButton).toBeVisible();
    });
});