import { Page, Locator} from '@playwright/test'

export class Header{
    readonly loginLink: Locator;
    readonly cartLink: Locator;


    constructor (private page: Page){
        this.loginLink = page.getByRole('link', {name: 'Login on register' });
        this.cartLink = page.getByRole('link', {name: /Cart/ });
    }

    async goToLogin(){
        await this.loginLink.click();
    }

     async goToCart(){
        await this.cartLink.click();
    }

    
}

