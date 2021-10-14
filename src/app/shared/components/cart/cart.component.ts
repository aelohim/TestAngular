import { Component } from '@angular/core';
import { ShoppingCartService } from '../../header/services/shopping-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  quantity$ = this.ShoppingCartSvc.quantityAction$;
  total$ = this.ShoppingCartSvc.totalAction$;
  cart$ = this.ShoppingCartSvc.cartAction$;
  constructor(private ShoppingCartSvc: ShoppingCartService){
  }
}
