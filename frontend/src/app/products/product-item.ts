export class ProductItem {
    private _name : string;
    private _unitPrice : number;
    private _sku : string
    private _description : string;
    private _unitsInStock : number;
    private _active : boolean;
    private _imageUrl : string;
    private _dateCreated : Date;
    private _lastUpdated : Date;

    constructor(name : string, unitPrice : number, sku : string, description : string, unitsInStock : number, active : boolean, imageUrl : string, dateCreated : Date, lastUpdated : Date){
        this._name = name;
        this._unitPrice = unitPrice; 
        this._sku = sku;
        this._description = description;
        this._unitsInStock = unitsInStock;
        this._active = active;
        this._imageUrl = imageUrl;
        this._dateCreated = dateCreated;
        this._lastUpdated = lastUpdated;
    }

    public get getName(){
        return this._name;
    }

    public set setName(name : string){
        this._name = name;
    }

    public get getUnitPrice(){
        return this._unitPrice;
    }

    public set setUnitPrice(unitPrice : number){
        this._unitPrice = unitPrice;
    }

    public get getSku(){
        return this._sku;
    }

    public set setSku(sku : string){
        this._sku = sku;
    }

    public get getDescription(){
        return this._description;
    }

    public set setDescription(description : string){
        this._description = description;
    }

    public get getUnitsInStock(){
        return this._unitsInStock;
    }

    public set setUnitsInStock(unitsInStock : number){
        this._unitsInStock = unitsInStock;
    }

    public get getImageUrl(){
        return this._imageUrl;
    }

    public set setImageUrl(imageUrl : string){
        this._imageUrl = imageUrl;
    }

    public get isActive(){
        return this._active;
    }

    public set setIsActive(active : boolean){
        this._active = active;
    }

    public get getDateCreated(){
        return this._dateCreated;
    }

    public set setDateCreated(dateCreated : Date){
        this._dateCreated = dateCreated;
    }

    public get getLastUpdated(){
        return this._lastUpdated;
    }

    public set setLastUpdated(lastUpdated : Date){
        this._lastUpdated = lastUpdated;
    }
}
