import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:8080/api/v1/categories";

  constructor(private http : HttpClient) {
  }

  getProductsByCategoryId(categoryId : number) : Observable<Product[]> {
    console.log(`${this.baseUrl}/${categoryId}`)
    return this.http
    .get<Products>(`${this.baseUrl}/${categoryId}`)
    .pipe(
      map(response => response.items)
    );
  }

}

interface Products {
  items: Product[];
}