/// <reference path="./product.ts" />

class productFactory {
    static GetProduct(): CocaCola {
        let Rnum = Math.floor((Math.random() * 2) + 1);

        if (Rnum == 1){
            return new CocaCola();
        }

        return new Sprite();
    }
}