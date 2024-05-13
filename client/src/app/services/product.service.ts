import {Injectable, isDevMode} from '@angular/core';
import {Product} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  products: Array<Product>= [];
  async getProducts() {
    try {
      const url: string = this.baseUrl + '/products';
      const data = await fetch(url);
      this.products = data && await data.json();
      // console.log(this.products);
      return this.products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  async findById(id: string) {
    if (!this.products.length) await this.getProducts();
    console.log(this.products);
    return this.products.find(product => product.product_id === id);
  }
}
