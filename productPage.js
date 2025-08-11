exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
        this.freeShippingText = '//div[contains(text(),"Free Shipping")]';
    }

    async isFreeShippingAvailable() {
        const freeShipping = await this.page.$(this.freeShippingText);
        return freeShipping !== null;
    }
};
