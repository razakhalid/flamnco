import {Injectable} from '@angular/core';
import {Product} from "../types";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
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
    // console.log(this.productsInCart)
    alert(`${product.product_name} successfully added to cart`);
    return this.productsInCart;
  }
  getProductsInCart() {
    // @ts-ignore
    if (!this.productsInCart) this.productsInCart = JSON.parse(sessionStorage.getItem("productsInCart"));
    // console.log(this.productsInCart)
    return Object.values(this.productsInCart);
  }
  removeProductFromCart(product: Product) {
    // @ts-ignore
    const productsInCart = { ...JSON.parse(sessionStorage.getItem("productsInCart")) };
    delete productsInCart[product.product_id];
    sessionStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    alert(`${product.product_name} successfully removed from cart`);
  }
  removeAllFromCart() {
    if (!this.productsInCart) return;
    // @ts-ignore
    sessionStorage.setItem("productsInCart", JSON.stringify({}));
    this.productsInCart = {};
    alert(`All products successfully removed from cart`);
    // console.log(sessionStorage.getItem("productsInCart"));
  }
  getTotal(): number {
    const productsInCart: any = this.getProductsInCart();
    let total: number = 0;
    productsInCart.forEach((p: Product) => {
      total += Number(p.product_price)
    });
    return Number(total);
  }
}
