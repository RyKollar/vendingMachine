/// <reference path="./product.ts" />

class productFactory {
    static GetProduct(): Product {
        let Rnum = Math.floor((Math.random() * 3) + 1);

        if (Rnum == 1){
            return new CocaCola();
        }
        else if (Rnum == 2){
            return new DrPepper();
        }

        return new Sprite();
    }
}