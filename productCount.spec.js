const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { ResultsPage } = require('../pages/resultsPage');

test('Product count after filters is more than 0', async ({ page }) => {
    const home = new HomePage(page);
    const results = new ResultsPage(page);

    await home.navigate();
    await home.searchItem('electronics');
    await results.applyFilters();

    const count = await results.getProductCount();
    expect(count).toBeGreaterThan(0);
});
