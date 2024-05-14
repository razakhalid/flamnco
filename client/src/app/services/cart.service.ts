import {Injectable} from '@angular/core';
import {Product} from "../types";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: any;
  addToCart(product: Product) {
    const { product_id } = product || {};
    // @ts-ignore
    let productsInCart = JSON.parse(sessionStorage.getItem("productsInCart"));
    productsInCart = productsInCart || {};
    productsInCart[product_id] = {...product};
    sessionStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    // @ts-ignore
    this.productsInCart = JSON.parse(sessionStorage.getItem("productsInCart"));
    console.log(this.productsInCart)
    return this.productsInCart;
  }
  getProductsInCart() {
    // @ts-ignore
    // @ts-ignore
    if (!this.productsInCart) this.productsInCart = JSON.parse(sessionStorage.getItem("productsInCart"));
    console.log(this.productsInCart)
    return this.productsInCart;
  }
  removeProductFromCart(product_id: string) {
    const productsInCart = this.getProductsInCart();
    delete productsInCart[product_id];
    sessionStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }
  removeAllFromCart() {
    if (!this.productsInCart) return;
    // @ts-ignore
    sessionStorage.getItem("productsInCart", JSON.stringify({}));
    this.productsInCart = {};
    console.log(sessionStorage.getItem("productsInCart"));
  }
}
