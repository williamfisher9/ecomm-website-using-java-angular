import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent  implements OnInit {

  constructor(private dataService : DataService) {}

  products : Product[] = [];

  ngOnInit(): void {
    this.dataService.favoriteItems.subscribe((data) => this.products = data);
  }

}