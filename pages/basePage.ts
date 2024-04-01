import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly aboutButton: Locator;
    readonly contactButton: Locator;
    readonly headerPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('.home');
        this.aboutButton = page.locator('.about');
        this.contactButton = page.locator('.contact');
        this.headerPanel = page.locator('#headerPanel');
    }
}