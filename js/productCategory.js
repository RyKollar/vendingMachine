var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ProductCategory = (function () {
        function ProductCategory() {
            this.imgPath = "img/";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            var _this = _super.apply(this, arguments) || this;
            _this.name = "Soda";
            return _this;
        }
        SodaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "SodaCan.png";
        };
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var CandyBarCategory = (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            var _this = _super.apply(this, arguments) || this;
            _this.name = "Candy Bar";
            return _this;
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return this.imgPath + "CandyBar.png";
        };
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=productCategory.js.map