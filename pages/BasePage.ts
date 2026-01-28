import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class BasePage {
  protected page: Page;

  protected user = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 })
  };

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}
