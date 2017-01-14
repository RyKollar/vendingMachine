namespace Coins {

    export abstract class Coin {
        value: number;
        constructor(value: number) {
            this.value = value;
        }

        abstract getImageUrl(): string;

        get Value() {
            return this.value;
        }
    }

    export class Nickle extends Coin {
        constructor() {
            super(.05);
        }

        getImageUrl(): string {
            return "img/nickle.png";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }

        getImageUrl(): string {
            return "img/Dime.png";
        }
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }

        getImageUrl(): string {
            return "img/Quarter.png";
        }
    }
}

//var coin = new Quarter();