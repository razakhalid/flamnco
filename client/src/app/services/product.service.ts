import {inject, Injectable, isDevMode} from '@angular/core';
import {Product} from "../types";
import {LoadingAnimationService} from "./loading-animation.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  products: Array<Product>= [];
  filteredProducts: Array<Product>= [];
  activeFilter: string = "";
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);
  async getProducts() {
    try {
      const url: string = this.baseUrl + '/products';
      const data = await fetch(url);
      this.products = data && await data.json();
      this.filteredProducts = this.products;
      // console.log(this.products);
      return this.products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  async findById(id: string) {
    if (!this.products.length) await this.getProducts();
    // console.log(this.products);
    return this.products.find(product => product.product_id === id);
  }
  filterProducts(filter: string) {
    this.loadingAnimationService.startLoading();
    setTimeout(() => {
      this.activeFilter = filter;
      // console.log(filter)
      this.filteredProducts = this.products.filter(product => product.product_category.toLowerCase() === filter.toLowerCase());
      this.loadingAnimationService.stopLoading();
      return this.filteredProducts;
    }, 300);
  }
  search(input: string) {
    this.loadingAnimationService.startLoading();
    setTimeout(() => {
      this.filteredProducts = this.products.filter(({ product_name }) => product_name.toLowerCase().match(input.toLowerCase()));
      console.log(this.filteredProducts);
      this.loadingAnimationService.stopLoading();
      return this.filteredProducts;
    }, 300);
  }
}
