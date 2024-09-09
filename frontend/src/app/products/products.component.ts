import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

  products : Product[] = [];

  constructor(private route : ActivatedRoute, private router : Router, private productService : ProductService){
    this.route.paramMap.subscribe((data) => {this.getProductsByCategoryId(Number(data.get('id')))});
  }

  getProductsByCategoryId(currentCategoryId: number) {
    this.productService.getProductsByCategoryId(currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
