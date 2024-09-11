export class Product {
  id: number;
  name: string;
  unitPrice: number;
  sku: string;
  description: string;
  unitsInStock: number;
  active: boolean;
  imageUrl: string;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(
    id: number,
    name: string,
    unitPrice: number,
    sku: string,
    description: string,
    unitsInStock: number,
    active: boolean,
    imageUrl: string,
    dateCreated: Date,
    lastUpdated: Date
  ) {
    this.id = id;
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
