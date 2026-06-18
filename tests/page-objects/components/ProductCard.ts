import { Page, Locator} from '@playwright/test'


export class ProductCard{
    readonly root: Locator;
    readonly productLink: Locator;
    readonly addToCartLink: Locator;
    readonly productTitle: Locator;
    readonly productImage: Locator;
    readonly productPrice: Locator;


    
 constructor(root: Locator) {
        this.root = root;
        this.productLink = root.getByRole('link', {name: /product/i });
        this.addToCartLink = root.getByRole('button', { name: 'Add to Cart' });
        this.productTitle = root.getByText('Skinsheen Bronzer Stick');
        this.productImage = root.locator('Skinsheen Bronzer Stick');
        this.productPrice = root.getByText('Makeup $29.50'); 
    }

    async goToProduct(){
        await this.productLink.click();
    }

     async addToCart(){
        await this.addToCartLink.click();
    }
    
}