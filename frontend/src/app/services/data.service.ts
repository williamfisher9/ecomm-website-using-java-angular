import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private cartCountSource = new BehaviorSubject(0);
  currentCartCount = this.cartCountSource.asObservable();

  private cart : string[] = [];

  constructor() { }

  addToCart(name : string) {
    console.log(name)
    this.cart.push(name)
    this.cartCountSource.next(this.cart.length);
  }

  /*deleteFromCart(name : string) {
    let newCart : Product[] = [];
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].name !== name){
        newCart.push(this.cart[i]);
      }
    }

    this.cart = newCart;
  }*/

}
