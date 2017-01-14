/// <reference path="productCategory.ts" />

interface Product {
    //abstract getImageUrl(): string;
    name: string;
    price: number;
    category?: ProductCategory;
}

class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();    

    getImageUrl(): string {
        return "img/CocaCola.png";
    }
}

class Sprite implements Product {
    name = "Sprite";
    price = 2.00;
    category = new SodaCategory();

    getImageUrl(): string {
        return "img/sprite.png";
    }
}

class DrPepper implements Product {
    name = "Dr Pepper";
    price = 2.10;
    category = new SodaCategory();

    getImageUrl(): string {
        return "img/sodaCan.png";
    }
}