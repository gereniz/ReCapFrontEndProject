import { Injectable } from '@angular/core';
import { Car } from '../modules/car';
import { CartItem } from '../modules/cart-item';
import { CartItems } from '../modules/cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {

  constructor() { }

  addToCart(car : Car){
    let item = CartItems.find(c => c.car.id === car.id)
    if(item){
      item.quantity +=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart (car : Car){
    let item = CartItems.find(c => c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }


  list() : CartItem[]{
    return CartItems;
  }
}
