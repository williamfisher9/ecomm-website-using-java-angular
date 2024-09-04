export class Product {
    constructor(public name : string, 
        public unitPrice : number, 
        public sku : string, 
        public description : string, 
        public unitsInStock : number, 
        public active : boolean, 
        public imageUrl : string, 
        public dateCreated : Date, 
        public lastUpdated : Date){
        this.name = name;
        this.unitPrice = unitPrice; 
        this.sku = sku;
        this.description = description;
        this.unitsInStock = unitsInStock;
        this.active = active;
        this.imageUrl = imageUrl;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
}
