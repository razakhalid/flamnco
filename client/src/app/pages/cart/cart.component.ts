import {Component, inject} from '@angular/core';
import { Product } from '../../types';
import { NgFor, NgIf } from '@angular/common';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService:CartService = inject(CartService);
  products: any;
  ngOnInit(){
    const products = this.cartService.getProductsInCart();
    if (products) this.products = Object.values(products);
  }
  getTotal() : number {
    if(this.products === undefined) { return 0; } /* if it's undefined the total is 0 */

    let total = 0;

    if(typeof this.products != undefined) {
      for(var prod of this.products) { total += prod.product_price; }
    }
    return total;
  }

  TOTAL = this.getTotal();

  removeFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
    this.products = this.products.filter((p: Product) => p.product_id !== product.product_id);
    // console.log(this.products);
  }

  removeAllFromCart(): void {
    this.cartService.removeAllFromCart();
    this.products = [];
  }

  checkOut(): void {
    console.log("Check Out Button Works");
  }
}
