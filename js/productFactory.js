define(["require", "exports", "./product"], function (require, exports, Products) {
    "use strict";
    //class productFactory {
    function GetProduct() {
        var Rnum = Math.floor((Math.random() * 3) + 1);
        if (Rnum == 1) {
            return new Products.CocaCola();
        }
        else if (Rnum == 2) {
            return new Products.DrPepper();
        }
        return new Products.Sprite();
    }
    exports.GetProduct = GetProduct;
});
//} 
//# sourceMappingURL=productFactory.js.map