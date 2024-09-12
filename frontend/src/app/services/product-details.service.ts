import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  baseUrl = "http://localhost:8080/api/v1/products";

  constructor(private http:HttpClient) { }

  getProductById(productId : string | null) : Observable<Product> {
    return this.http.get<GetProductById>(`${this.baseUrl}/${productId}`).pipe(map(response => response.items));
  }

}

interface GetProductById {
  items: Product;
}
