import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private cartItemsSource : BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);
  cartItems = this.cartItemsSource.asObservable();

  addToCart(product : Product){
    const currentCartItems = this.cartItemsSource.value;
    const updatedCartItems = [...currentCartItems, product];
    console.log(updatedCartItems)
    this.cartItemsSource.next(updatedCartItems);
  }
}