exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = 'input[name="q"]';
        this.searchButton = '.search-box__button--1oH7';
    }

    async navigate() {
        await this.page.goto('https://www.daraz.pk/');
    }

    async searchItem(item) {
        await this.page.fill(this.searchInput, item);
        await this.page.click(this.searchButton);
    }
};
