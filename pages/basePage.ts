import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly aboutButton: Locator;
    readonly contactButton: Locator;
    readonly headerPanel: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('.home');
        this.aboutButton = page.locator('.about');
        this.contactButton = page.locator('.contact');
        this.headerPanel = page.locator('#headerPanel');
        this.userNameField = page.locator('//input[@name="username"]');
        this.passwordField = page.locator('//input[@name="password"]');
        this.submitButton = page.locator('//input[@type="submit"]');
    }

    async goTo() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async login(username: string, password: string) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}