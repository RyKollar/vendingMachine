/// <reference path="typings/knockout.d.ts" />
define(["require", "exports", "./coin", "./product", "./productFactory"], function (require, exports, Coins, Products, productFactory_1) {
    "use strict";
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
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
            this.selectedCell = ko.observable(new Cell(new Products.Initial()));
            this.cells = ko.observableArray([]);
            this.acceptedCoins = [new Coins.Quarter(), new Coins.Dime(), new Coins.Nickle()];
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
                    var product = productFactory_1.GetProduct();
                    this.cells.push(new Cell(product));
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map