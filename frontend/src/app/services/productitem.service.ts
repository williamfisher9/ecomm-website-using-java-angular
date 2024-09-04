import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductitemService {

  baseUrl = "http://localhost:8080/api/v1/products";

  constructor(private http : HttpClient) { }

  getProductList() : Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(map(response => response.products));
  }
}

interface GetResponse {
  products: Product[];
}
