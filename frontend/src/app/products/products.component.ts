import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private dataService: DataService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.getProductsByCategoryId(Number(data.get('id')));
    });
  }

  addToCart(item : Product) {
    this.dataService.addToCart(item);
  }

  addToFavorite(item : Product) {
    this.dataService.addToFavorite(item);
  }

  getProductsByCategoryId(currentCategoryId: number) {
    
      this.productService
        .getProductsByCategoryId(currentCategoryId)
        .subscribe((data) => {
          this.products = data;
        });
    
  }
}
