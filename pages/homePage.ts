import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;
    readonly atmServices: Locator;
    readonly onlineServices: Locator;
    readonly readMoreLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('//span[@class="title"]');
        this.atmServices = page.locator('.services');
        this.onlineServices = page.locator('.servicestwo');
    }

    async clickOnReadMoreLink() {
        await this.page.getByText('Read More').first().click();
    }
}