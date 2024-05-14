import {Injectable, isDevMode} from '@angular/core';
import {Product} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  products: Array<Product>= [];
  filteredProducts: Array<Product>= [];
  activeFilter: string = "";
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
  filterProducts(filter: string) {
    this.activeFilter = filter;
    console.log(filter)
    this.filteredProducts = this.products.filter(product => product.product_category.toLowerCase() === filter.toLowerCase());
    console.log(this.products.find(product => product.product_name === "Majestic Melody Classical Guitar"));
    return this.filteredProducts;
  }
}
