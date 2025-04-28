import { test, expect } from '@playwright/test';

test('homepage has title and loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Movies Finder"); // update this title
});