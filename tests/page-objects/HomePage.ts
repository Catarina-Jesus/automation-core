import { Page, Locator} from '@playwright/test'
import { navBar } from './components/NavBar';
import { ProductCard } from './components/ProductCard';


export class HomePage{
    page: Page;
    mainHeader: Locator;
    loginLink: Locator;
    cart: Locator;
    navigationBar: navBar;
    header: Locator;
    productCard: ProductCard;
    productCard2: ProductCard;
    footer: Locator;



    constructor (page: Page){
        this.page = page;
        this.mainHeader = page.getByText('Raider Test Store');
        this.loginLink = page.getByRole('link', { name: 'Login or register' });
        this.cart = page.getByRole('link', { name: 'Cart: 0 item(s)' });
        this.navigationBar = new navBar(page.getByRole('navigation'));
        this.header = page.getByRole('heading', { name: 'Featured Products' });
        this.footer = page.getByRole('contentinfo');
        this.productCard = new ProductCard(page.locator('.product-card').filter({hasText: 'Skinsheen Bronzer Stick'}));        
        this.productCard2 = new ProductCard(page.locator('.product-card').filter({hasText: 'BeneFit Girl Meets Pearl'}));
    }


    async openCart() {
        await this.cart.click();
    }

}