import { Page, Locator} from '@playwright/test'

export class ProductCard{
    readonly root: Locator;
    readonly productLink: Locator;
    readonly addToCartButton: Locator;
    readonly productTitle: Locator;
    readonly productImage: Locator;
    readonly productPrice: Locator;

 constructor(root: Locator) {
        this.root = root;
        this.productLink = root.getByRole('link', {name: /product/ });
        this.addToCartButton = root.getByRole('button', {name: /add to cart/i});
        this.productTitle = root.getByText('Skinsheen Bronzer Stick');
        this.productImage = root.locator('Skinsheen Bronzer Stick');
        this.productPrice = root.getByText('Makeup $29.50'); 
    }

    async goToProduct(){
        await this.productLink.click();
    }

     async addToCart(){
        await this.addToCartButton.click();
    }
    
}