import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories-menu.component.html',
  styleUrl: './categories-menu.component.css',
})
export class CategoriesMenuComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategoriesList().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
