import { test, expect } from '@playwright/test'
import { RegistrationPage } from '../pages/register-page'

const testUser = {
  firstName: 'Tracey',
  lastName: 'Nguyen',
  address: '8 McMurray Street', 
  city: 'Melbourne',
  state: 'Victoria',
  zipCode: '90210',
  phone: '0452641700',
  ssn: '345275566',
  username: 'traceynguyen5',
  password: 'traceytest123',
  confirm: 'traceytest123'
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
  await registrationPage.username.fill(testUser.username)
  await registrationPage.password.fill(testUser.password)
  await registrationPage.confirm.fill(testUser.confirm)

  await registrationPage.registerButton.click()

  await expect(page.getByRole('heading', { name: `Welcome ${testUser.username}` })).toBeVisible()
  await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible()
})