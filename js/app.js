var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(value) {
        this.value = value;
    }
    Object.defineProperty(Coin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return Coin;
}());
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, .10) || this;
    }
    Dime.prototype.getImageUrl = function () {
        return "img/Dime.png";
    };
    return Dime;
}(Coin));
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, .25) || this;
    }
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}(Coin));
//var coin = new Quarter(); 
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
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
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = "Sprite";
        this.price = 2.00;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
/// <reference path="./product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var Rnum = Math.floor((Math.random() * 2) + 1);
        if (Rnum == 1) {
            return new CocaCola();
        }
        return new Sprite();
    };
    return productFactory;
}());
/// <reference path="coin.ts" />
/// <reference path="typings/knockout.d.ts" />
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter(), new Dime()];
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
            console.log(oldTotal);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() == 0) {
                alert("I'm sorry, we're out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map