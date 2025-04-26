# Test info

- Name: Hero section and CTA navigation
- Location: /Users/benjamin/Code/benlabs/tests/hero.test.ts:3:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/benjamin/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     pnpm exec playwright install                                        ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('Hero section and CTA navigation', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/benjamin/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   4 |   // Navigate to the home page
   5 |   await page.goto('/');
   6 |
   7 |   // Assert that the hero text is visible
   8 |   const heroText = await page.locator('text=Welcome to\nBen Lab_');
   9 |   await expect(heroText).toBeVisible();
  10 |
  11 |   // Click the CTA button and assert navigation to /world
  12 |   const ctaButton = await page.locator('button[aria-label="Enter Ben\'s 3D world"]');
  13 |   await ctaButton.click();
  14 |
  15 |   // Wait for navigation and assert the URL
  16 |   await page.waitForURL('/world', { timeout: 1000 });
  17 |   await expect(page).toHaveURL('/world');
  18 | });
```