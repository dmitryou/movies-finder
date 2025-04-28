import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await page.getByRole('link', { name: 'Account' }).click();
	await page.getByRole('link', { name: 'Login' }).click();
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page.getByRole('textbox', { name: 'Email' }).fill('dmitry@gmail.com');
	await page.getByRole('textbox', { name: 'Email' }).click();
	await page.getByRole('button', { name: 'Log In' }).click();
	await page.getByRole('link', { name: 'Home' }).click();
  });