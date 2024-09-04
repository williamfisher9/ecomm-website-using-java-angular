import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{
  products : Product[] = [];

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
