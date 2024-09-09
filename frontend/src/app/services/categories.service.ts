import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private baseUrl = "http://localhost:8080/api/v1/categories";

  constructor(private http : HttpClient) {
  }

  getCategoriesList() : Observable<Category[]> {
    return this.http
    .get<Categories>(this.baseUrl)
    .pipe(
      map(response => response.items)
    );
  }

}

interface Categories {
  items: Category[];
}
