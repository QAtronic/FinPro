import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/signin')
  })

  test('should display sign in page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible()
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()
  })

  test('should show error for invalid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('invalid@example.com')
    await page.getByLabel('Password').fill('wrongpassword')
    await page.getByRole('button', { name: 'Sign In' }).click()

    await expect(page.getByText('Invalid email or password')).toBeVisible()
  })

  test('should sign in with valid credentials', async ({ page }) => {
    await page.getByLabel('Email').fill('admin@corpfin.pro')
    await page.getByLabel('Password').fill('Admin123!')
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Should redirect to dashboard
    await expect(page).toHaveURL('/')
    await expect(page.getByText('Welcome back')).toBeVisible()
  })

  test('should toggle password visibility', async ({ page }) => {
    const passwordInput = page.getByLabel('Password')
    const toggleButton = page.getByRole('button', { name: /toggle password/i })

    // Password should be hidden by default
    await expect(passwordInput).toHaveAttribute('type', 'password')

    // Click toggle to show password
    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')

    // Click toggle to hide password again
    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })
})

test.describe('Dashboard Access', () => {
  test('should redirect to sign in when not authenticated', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/auth/signin')
  })

  test('should access dashboard when authenticated', async ({ page }) => {
    // Sign in first
    await page.goto('/auth/signin')
    await page.getByLabel('Email').fill('admin@corpfin.pro')
    await page.getByLabel('Password').fill('Admin123!')
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Should be on dashboard
    await expect(page).toHaveURL('/')
    await expect(page.getByText('Dashboard')).toBeVisible()
  })
})
