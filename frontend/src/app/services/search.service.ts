import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = "http://localhost:8080/api/v1/products/search"

  constructor(private http : HttpClient) { }

  findSearchResult(val : string) : Observable<Product[]> {
    return this.http.get<SearchResult>(`${this.baseUrl}/${val}`).pipe(map(response => response.items));
  }
}

interface SearchResult {
  items: Product[]
}