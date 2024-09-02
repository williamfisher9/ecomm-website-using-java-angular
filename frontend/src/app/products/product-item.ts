export class ProductItem {
    private title : string;
    private price : number;

    constructor(title : string, price : number){
        this.title = title;
        this.price = price;
    }

    set setTitle(title : string){
        this.title = title;
    }

    set setPrice(price : number){
        this.price = price;
    }

    get getTitle(){
        return this.title;
    }

    get getPrice(){
        return this.price;
    }
}
