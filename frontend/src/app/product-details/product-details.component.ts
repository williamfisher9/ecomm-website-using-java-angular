import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../model/product';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  productId! : string | null;

  product! : Product;

  constructor(private route : ActivatedRoute, private productDetailsService : ProductDetailsService) {
    this.route.paramMap.subscribe(data => {
      console.log(data.get('id'))
      this.productId = data.get('id');
    })
  }

  ngOnInit(): void {
    console.log('running ngOnInit')
    this.productDetailsService.getProductById(this.productId).subscribe(data => this.product = data);
  }

}

