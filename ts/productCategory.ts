abstract class ProductCategory {
    protected  imgPath = "img/";

    name:string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = "Soda";

    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}

class CandyBarCategory extends ProductCategory {
    name = "Candy Bar";

    getImageUrl() {
        return this.imgPath + "CandyBar.png";
    }
}