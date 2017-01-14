import * as Products from "./product"

//class productFactory {
    export function GetProduct(): Products.Product {
        let Rnum = Math.floor((Math.random() * 3) + 1);

        if (Rnum == 1){
            return new Products.CocaCola();
        }
        else if (Rnum == 2){
            return new Products.DrPepper();
        }

        return new Products.Sprite();
    }
//}