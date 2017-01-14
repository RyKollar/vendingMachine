import * as ProductCategory from "./productCategory"

export interface Product {
    //abstract getImageUrl(): string;
    name: string;
    price: number;
    category?: ProductCategory.ProductCategory;
}

export class Initial implements Product {
    name = "Initial"
    price = 100;
}

export class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new ProductCategory.SodaCategory();    

    getImageUrl(): string {
        return "img/CocaCola.png";
    }
}

export class Sprite implements Product {
    name = "Sprite";
    price = 2.00;
    category = new ProductCategory.SodaCategory();

    getImageUrl(): string {
        return "img/sprite.png";
    }
}

export class DrPepper implements Product {
    name = "Dr Pepper";
    price = 2.10;
    category = new ProductCategory.SodaCategory();

    getImageUrl(): string {
        return "img/sodaCan.png";
    }
}