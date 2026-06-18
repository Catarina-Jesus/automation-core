import { Page, Locator} from '@playwright/test'
import { ProductCard } from './components/productCard';
import { navBar as NavBar } from './components/navBar'; 

export class HomePage{
    page: Page;
    mainHeader: Locator;
    loginLink: Locator;
    cart: Locator;
    navigationBar: NavBar;
    header: Locator;
    productCard: ProductCard;
    footer: Locator;



    constructor (page: Page){
        this.page = page;
        this.mainHeader = page.getByText('Raider Test Store');
        this.loginLink = page.getByRole('link', { name: 'Login or register' });
        this.cart = page.getByRole('link', { name: 'Cart: 0 item(s)' });
        this.navigationBar = new NavBar(page.getByRole('navigation'));
        this.header = page.getByRole('heading', { name: 'Featured Products' });
        this.productCard = new ProductCard(page.getByRole('link', { name: 'Skinsheen Bronzer Stick' }));
        this.footer = page.getByRole('contentinfo');
    }


    async openCart() {
        await this.cart.click();
    }

    async getProductCardByIndex(index: number): Promise<ProductCard> {
        return new ProductCard(this.productCard.root.nth(index));
    }

}