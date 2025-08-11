exports.ResultsPage = class ResultsPage {
    constructor(page) {
        this.page = page;
        this.brandFilter = 'div.y9-OE a label span:nth-child(2)';
        this.minPrice = 'input[placeholder="Min"]';
        this.maxPrice = 'input[placeholder="Max"]';
        this.applyButton = 'button:has-text("Go")';

        this.productItems = 'div[data-qa-locator="product-item"]';
        this.freeShippingLabel = 'span:has-text("Free Shipping")';
    }

    async applyFilters() {
        // Scroll the entire page down a bit to trigger dynamic loading
        await this.page.mouse.wheel(0, 1000);
        await this.page.waitForTimeout(2000); // give time for content to appear
    
        // Wait for the brand filter section (using your provided CSS selector)
        await this.page.waitForSelector('div._9xWFp', { timeout: 30000, state: 'visible' });
    
        // Now that the brand filter section is visible, locate the first brand filter option
        const brandOption = this.page.locator('div._9xWFp label span').first();
        await brandOption.scrollIntoViewIfNeeded();
        await brandOption.waitFor({ state: 'visible', timeout: 10000 });
        await brandOption.click();
    
        // Fill in price range fields
        await this.page.waitForSelector(this.minPrice);
        await this.page.fill(this.minPrice, '500');
    
        await this.page.waitForSelector(this.maxPrice);
        await this.page.fill(this.maxPrice, '5000');
    
        // Wait for results to refresh and apply filters
        await this.page.waitForTimeout(4000);
    }
    

    async getProductCount() {
        const products = await this.page.$$(this.productItems);
        return products.length;
    }

    async clickFirstProduct() {
        await this.page.locator(this.productItems).first().click();
    }

    async isFreeShippingAvailable() {
        const freeShippingTextLocator = this.page.locator(this.freeShippingLabel);
        const isVisible = await freeShippingTextLocator.isVisible();
        console.log(`Free shipping visible: ${isVisible}`);
        return isVisible;
    }
};
