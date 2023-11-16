import { test, expect } from '@playwright/test'
import { RegistrationPage } from '../pages/register-page'
import { faker } from '@faker-js/faker'

const testUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: '8 McMurray Street', 
  city: 'Melbourne',
  state: 'Victoria',
  zipCode: '90210',
  phone: faker.phone.number('04########'),
  ssn: faker.string.numeric(9),
  password: 'traceytest123', 
  randomNumber: faker.string.numeric(3)
}

test('sucessful registration', async({ page }) => {
  const registrationPage = new RegistrationPage(page)
  await registrationPage.goto('https://parabank.parasoft.com/parabank/register.htm')

  await registrationPage.firstName.fill(testUser.firstName)
  await registrationPage.lastName.fill(testUser.lastName)
  await registrationPage.address.fill(testUser.address)
  await registrationPage.city.fill(testUser.city)
  await registrationPage.state.fill(testUser.state)
  await registrationPage.zipCode.fill(testUser.zipCode)
  await registrationPage.phone.fill(testUser.phone)
  await registrationPage.ssn.fill(testUser.ssn)
  await registrationPage.username.fill(testUser.firstName + testUser.randomNumber)
  await registrationPage.password.fill(testUser.password)
  await registrationPage.confirm.fill(testUser.password)

  await registrationPage.registerButton.click()

  await expect(page.getByRole('heading', { name: `Welcome ${testUser.firstName + testUser.randomNumber}` })).toBeVisible()
  await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible()

  await registrationPage.logout.click()
})