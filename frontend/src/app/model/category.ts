export class Category {
    id : number;
    categoryName : string;
    categoryStyle : string;

    constructor(id : number, categoryName : string, categoryStyle : string) {
        this.id = id;
        this.categoryName = categoryName;
        this.categoryStyle = categoryStyle;
    }
}
