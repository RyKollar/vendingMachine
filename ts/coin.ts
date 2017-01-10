class Quarter {
    private readonly value: number = .25;

    getImageUrl () : string {
        return "img/Quarter.png";
    }
}

var coin = new Quarter();