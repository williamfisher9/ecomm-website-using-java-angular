import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private dataService : DataService) {}

  products : Product[] = [];

  ngOnInit(): void {
    this.dataService.cartItems.subscribe((data) => this.products = data);
  }

}
