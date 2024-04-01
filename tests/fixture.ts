import { test as base } from '@playwright/test';
import { BasePage } from '../pages/basePage.ts';
import { HomePage } from '../pages/homePage.ts';

type MyFixures = {
    basePage: BasePage;
    homePage: HomePage;
}

export const test = base.extend<MyFixures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.goTo();

        await use(homePage);
    },

    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
})

export { expect } from '@playwright/test';