import { type Locator, type Page } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page
  readonly firstName: Locator
  readonly lastName: Locator
  readonly address: Locator
  readonly city: Locator
  readonly state: Locator
  readonly zipCode: Locator
  readonly phone: Locator
  readonly ssn: Locator
  readonly username: Locator
  readonly password: Locator
  readonly confirm: Locator
  readonly registerButton: Locator
  readonly logout: Locator


  constructor(page: Page) {
    this.page = page
    this.firstName = page.locator('id=customer.firstName')
    this.lastName = page.locator('id=customer.lastName')
    this.address = page.locator('id=customer.address.street')
    this.city = page.locator('id=customer.address.city')
    this.state = page.locator('id=customer.address.state')
    this.zipCode = page.locator('id=customer.address.zipCode')
    this.phone = page.locator('id=customer.phoneNumber')
    this.ssn = page.locator('id=customer.ssn')
    this.username = page.locator('id=customer.username')
    this.password = page.locator('id=customer.password')
    this.confirm = page.locator('id=repeatedPassword')
    this.registerButton = page.locator('input[value="Register"]')
    this.logout = page.getByRole('link', {name: 'Log Out'})
  }

  async goto(url) {
    await this.page.goto(url)
  }
}