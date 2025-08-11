import { test, expect } from '@playwright/test';
import { ResultsPage } from '../pages/resultsPage';

test('Check if free shipping is available on product', async ({ page }) => {
    const resultsPage = new ResultsPage(page);
    await resultsPage.applyFilters();

    // Verify if free shipping is available
    const isFreeShipping = await resultsPage.isFreeShippingAvailable();
    console.log(`Is free shipping available: ${isFreeShipping}`); // Add logging to debug

    // Check the availability of free shipping
    expect(isFreeShipping).toBeTruthy(); // This assertion checks if free shipping is visible
});
