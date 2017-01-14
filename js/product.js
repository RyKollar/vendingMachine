define(["require", "exports", "./productCategory"], function (require, exports, ProductCategory) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "Initial";
            this.price = 100;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new ProductCategory.SodaCategory();
        }
        CocaCola.prototype.getImageUrl = function () {
            return "img/CocaCola.png";
        };
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Sprite = (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 2.00;
            this.category = new ProductCategory.SodaCategory();
        }
        Sprite.prototype.getImageUrl = function () {
            return "img/sprite.png";
        };
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var DrPepper = (function () {
        function DrPepper() {
            this.name = "Dr Pepper";
            this.price = 2.10;
            this.category = new ProductCategory.SodaCategory();
        }
        DrPepper.prototype.getImageUrl = function () {
            return "img/sodaCan.png";
        };
        return DrPepper;
    }());
    exports.DrPepper = DrPepper;
});
//# sourceMappingURL=product.js.map