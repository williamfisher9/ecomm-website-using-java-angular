import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private cartItemsSource : BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);
  cartItems = this.cartItemsSource.asObservable();

  private favoriteItemsSource : BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);
  favoriteItems = this.favoriteItemsSource.asObservable();

  addToCart(product : Product){
    const currentCartItems = this.cartItemsSource.value;
    const updatedCartItems = [...currentCartItems, product];
    console.log(updatedCartItems)
    this.cartItemsSource.next(updatedCartItems);
  }

  addToFavorite(product : Product) {
    let duplicateItem = false;
    for(let i = 0 ; i < this.favoriteItemsSource.value.length; i++){
      if(product.id === this.favoriteItemsSource.value[i].id){
        duplicateItem = true;
      }
    }

    if(!duplicateItem)
      this.favoriteItemsSource.next([...this.favoriteItemsSource.value, product]);
  }
}