var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.Coin = Coin;
    var Nickle = (function (_super) {
        __extends(Nickle, _super);
        function Nickle() {
            return _super.call(this, .05) || this;
        }
        Nickle.prototype.getImageUrl = function () {
            return "img/nickle.png";
        };
        return Nickle;
    }(Coin));
    exports.Nickle = Nickle;
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
    exports.Dime = Dime;
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
    exports.Quarter = Quarter;
});
//var coin = new Quarter(); 
//# sourceMappingURL=coin.js.map