import { test, expect } from '@playwright/test';

test('Hero section and CTA navigation', async ({ page }) => {
  // Navigate to the home page
  await page.goto('/');

  // Assert that the hero text is visible
  const heroText = await page.locator('text=Welcome to\nBen Lab_');
  await expect(heroText).toBeVisible();

  // Click the CTA button and assert navigation to /world
  const ctaButton = await page.locator('button[aria-label="Enter Ben\'s 3D world"]');
  await ctaButton.click();

  // Wait for navigation and assert the URL
  await page.waitForURL('/world', { timeout: 1000 });
  await expect(page).toHaveURL('/world');
});