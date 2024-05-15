import {Injectable, isDevMode, inject} from '@angular/core';
import {Product} from "../types";
import {LoadingAnimationService} from "./loading-animation.service";
import {Router} from "@angular/router";
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  productsInCart: any;
  router: Router = inject(Router);
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  orderId: string = "";
  loadingAnimationService:LoadingAnimationService = inject(LoadingAnimationService);
  notificationService:NotificationService = inject(NotificationService);
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
    this.notificationService.setNotification({
      type: 'success',
      message: `${product.product_name} successfully added to cart`,
      navigateTo: {
        path: '/cart',
        label: 'View Cart'
      }
    });
    return this.productsInCart;
  }
  getProductsInCart() {
    // @ts-ignore
    const productsInCart = JSON.parse(sessionStorage.getItem("productsInCart"));
    this.productsInCart = productsInCart;
    // console.log(this.productsInCart)
    return productsInCart && Object.values(productsInCart) || [];
  }
  removeProductFromCart(product: Product) {
    // @ts-ignore
    const productsInCart = { ...JSON.parse(sessionStorage.getItem("productsInCart")) };
    delete productsInCart[product.product_id];
    sessionStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    this.notificationService.setNotification({
      type: 'success',
      message: `${product.product_name} successfully removed from cart`,
      navigateTo: undefined
    });
  }
  removeAllFromCart(showNotice: boolean) {
    if (!this.productsInCart) return;
    // @ts-ignore
    sessionStorage.setItem("productsInCart", JSON.stringify({}));
    this.productsInCart = {};
    if (showNotice) this.notificationService.setNotification({
      type: 'success',
      message: `Products successfully removed from cart`,
      navigateTo: undefined
    });
    // console.log(sessionStorage.getItem("productsInCart"));
  }
  getTotal(): number {
    const productsInCart: any = this.getProductsInCart();
    let total: number = 0;
    productsInCart.forEach((p: Product) => {
      total += Number(p.product_price);
    });
    return Number(total.toFixed(2));
  }
  async submitCheckoutData(checkoutData: any) {
    const productsInCart: any = this.getProductsInCart();
    const orderTotal: number = this.getTotal();
    checkoutData = {
      ...checkoutData,
      productsInCart: productsInCart,
      orderTotal
    }
    const url:string = this.baseUrl + '/order';
    this.loadingAnimationService.startLoading();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData)
      });
      this.loadingAnimationService.stopLoading();
      const { message, orderId } = await response.json();
      this.notificationService.setNotification({
        type: "success",
        message: message,
        navigateTo: {
          path: "/shop",
          label: "Keep Shopping"
        }
      });
      this.orderId = orderId;
      this.removeAllFromCart(false);
      this.router.navigateByUrl('/confirmation');
      return;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
