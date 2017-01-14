abstract class Coin {
    value: number;
    constructor(value:number) {
        this.value = value;
    }

    abstract getImageUrl() : string;

    get Value() {
        return this.value;
    }    
}

class Dime extends Coin {
    constructor() {
        super(.10);
    }

    getImageUrl () : string {
        return "img/Dime.png";
    }
}

class Quarter extends Coin {
    constructor() {
        super(.25);
    }

    getImageUrl () : string {
        return "img/Quarter.png";
    }
}

//var coin = new Quarter();