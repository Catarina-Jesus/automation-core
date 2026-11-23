import { Page, Locator} from '@playwright/test'
import { navBar } from './components/NavBar';
import { ProductCard } from './components/ProductCard';

export class HomePage{
    page: Page;
    newCustomerHeader: Locator;
    newLoginLink: Locator;
    loginWelcomeText: Locator;
    loginInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    navigationBar: navBar;
    footer: Locator;

    constructor (page: Page){
        this.page = page;
        this.newCustomerHeader = page.getByText('New customer');
        this.newLoginLink = page.getByRole('link', { name: 'Continue' });
        this.loginWelcomeText = page.getByText('Welcome Again');
        this.loginInput = page.getByRole('textbox', { name: 'Login name' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.navigationBar = new navBar(page.getByRole('navigation'));
        this.footer = page.getByRole('contentinfo');
    }

    async login (username: string, password: string) {
        await this.loginInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}