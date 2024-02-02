import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartitem: Product[] = [];
  private cartitemcount = new BehaviorSubject<number>(0);

  realcartcount = this.cartitemcount.asObservable();

  constructor() { }


  AddToCart(product: Product) {

    this.cartitem.push(product);
    this.cartitemcount.next(this.cartitem.length);

  }

  //*****/

  getCartitem(): Product[] {
    return this.cartitem;
  }

  ///**** */

  removeitem(id: number) {
    const index = this.cartitem.findIndex((item => item.id === id));
    this.cartitem.splice(index, 1);
    this.cartitemcount.next(this.cartitem.length);

  }
}
