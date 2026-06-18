import { Page, Locator} from '@playwright/test'


export class navBar{
    readonly root: Locator;
    readonly homeLink: Locator;
    readonly accessoriesLink: Locator;
    readonly makeupLink: Locator;
    readonly skincareLink: Locator;
    readonly fragranceLink: Locator;
    readonly menLink: Locator;
    readonly hairCareLink: Locator;
    readonly booksLink: Locator;


    
 constructor(root: Locator) {
        this.root = root;
        this.homeLink = root.getByRole('navigation').getByRole('link', { name: 'Home' });
        this.accessoriesLink = root.getByRole('link', { name: 'Apparel & Accessories' });
        this.makeupLink = root.getByRole('link', { name: 'Makeup', exact: true });
        this.skincareLink = root.getByRole('link', { name: 'Skincare', exact: true });
        this.fragranceLink = root.getByRole('link', { name: 'Fragrance', exact: true });
        this.menLink = root.getByRole('link', { name: 'Men', exact: true });
        this.hairCareLink = root.getByRole('link', { name: 'Hair Care', exact: true });
        this.booksLink = root.getByRole('link', { name: 'Books', exact: true });
    
    }

    async goToHomePage(){
        await this.homeLink.click();
    }

      async goToAccessoriesPage(){
        await this.accessoriesLink.click();
    }

     async goToMakeupPage(){
        await this.makeupLink.click();
    }
    

     async goToSkincarePage(){
        await this.skincareLink.click();
    }


     async goToFragrancePage(){
        await this.fragranceLink.click();
    }

     async goToMenPage(){
        await this.menLink.click();
    }

     async goToHairCarePage(){
        await this.hairCareLink.click();
    }

     async goToBooksPage(){
        await this.booksLink.click();
    }
}