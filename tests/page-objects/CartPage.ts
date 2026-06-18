import { Page, Locator} from '@playwright/test'

export class CartPage{
    page: Page;
    header: Locator;
    continueShoppingLink: Locator;
    emptyCartHeader: Locator;
    emptyCartMessage: Locator;
    removeItem: Locator;
    quantityCell: Locator;


    constructor (page: Page){
        this.page = page;
        this.header = page.getByRole('heading', { name: 'Shopping Cart' });
        this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
        this.emptyCartHeader = page.getByRole('heading', { name: 'Your cart is empty' });
        this.emptyCartMessage = page.getByText('Browse our store and add some');
        this.removeItem = page.getByRole('button', { name: 'Remove' });
        this.quantityCell = page.getByRole('cell', { name: '1' });
    }


    async removeItemFromCart() {
        await this.removeItem.click();
    }

    async clickToContinueShopping() {
        await this.continueShoppingLink.click();
}

    
}