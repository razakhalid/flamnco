import {Component, inject} from '@angular/core';
import { Product } from '../../types';
import { NgFor, NgIf } from '@angular/common';
import {CheckoutService} from "../../services/checkout.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  checkoutService:CheckoutService = inject(CheckoutService);
  products: any;
  total: number = 0;
  ngOnInit(){
    const products = this.checkoutService.getProductsInCart();
    if (products) this.products = Object.values(products);
    this.total = this.checkoutService.getTotal();
    console.log(this.total)
  }
  removeFromCart(product: Product): void {
    this.checkoutService.removeProductFromCart(product);
    this.products = this.products.filter((p: Product) => p.product_id !== product.product_id);
    // console.log(this.products);
  }

  removeAllFromCart(): void {
    this.products = [];
    this.checkoutService.removeAllFromCart(true);
  }
}
