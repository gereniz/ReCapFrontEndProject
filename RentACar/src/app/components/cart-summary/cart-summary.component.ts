import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/modules/cart-item';
import { CartSummaryService } from 'src/app/services/cart-summary.service';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/modules/car';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems : CartItem[] = [];
  constructor(private cartSummaryService : CartSummaryService,private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartSummaryService.list();
  }

  removeFromCart(car: Car){
    this.cartSummaryService.removeFromCart(car);
    this.toastrService.error("Silindi",car.brandname)+"sepetten silinid";
  }
}
