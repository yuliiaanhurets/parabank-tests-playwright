import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;
    readonly atmServices: Locator;
    readonly onlineServices: Locator;
    readonly readMoreLink: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('//span[@class="title"]');
        this.atmServices = page.locator('.services');
        this.onlineServices = page.locator('.servicestwo');
        this.userNameField = page.locator('//input[@name="username"]');
        this.passwordField = page.locator('//input[@name="password"]');
        this.submitButton = page.locator('//input[@type="submit"]');
    }

    async clickOnReadMoreLink() {
        await this.page.getByText('Read More').first().click();
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