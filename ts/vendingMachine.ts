/// <reference path="typings/knockout.d.ts" />

import * as Coins from "./coin"
import * as Products from "./product"
import {GetProduct} from "./productFactory"

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Products.Product) {
        
    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}

export class VendingMachine {    
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Products.Initial()));
    cells = ko.observableArray([]);
    acceptedCoins: Coins.Coin[] = [new Coins.Quarter(),new Coins.Dime(),new Coins.Nickle()];
    canPay = ko.pureComputed(() => this.paid() - 
                    this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product = GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin:Coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);

        console.log(oldTotal);
    }

    pay = (): void => {
        if (this.selectedCell().stock() == 0) {
            alert("I'm sorry, we're out of them!");
            return;
        }

        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) *100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}