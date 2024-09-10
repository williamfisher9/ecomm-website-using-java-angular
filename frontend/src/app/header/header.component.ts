import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Product } from '../model/product';
import { DataService } from '../services/data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  searchPhrase : string = "";
  products : Product[] = [];

  cartItemsCount : number = 0;

  constructor(private searchService : SearchService, private dataService : DataService) {}
  
  ngOnInit(): void {
    this.dataService.currentCartCount.subscribe(val => this.cartItemsCount = val);
  }

}
