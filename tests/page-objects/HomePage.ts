import { Page, Locator} from '@playwright/test'
import { ProductCard } from './components/ProductCard';
import { navBar as NavBar } from './components/NavBar'; 

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
        this.navigationBar = new NavBar(page);
        this.header = page.getByRole('heading', { name: 'Featured Products' });
        this.productCard = new ProductCard(page);
        this.footer = page.getByRole('contentinfo');
    }


    async openCart() {
        await this.cart.click();
    }

    async searchProduct(name: string) {
        await this.searchInput.fill(name);
        await this.searchInput.press('Enter');
    }

    
}