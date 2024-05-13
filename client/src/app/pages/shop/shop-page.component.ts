import {Component, isDevMode, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgFor} from "@angular/common";
import {Product} from "../../types";
import {ProductService} from "../../services/product.service";
import {LoadingAnimationComponent} from "../../components/loading-animation/loading-animation.component";
import {LoadingAnimationService} from "../../services/loading-animation.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, NgFor, LoadingAnimationComponent, RouterLink],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {
  productService:ProductService = inject(ProductService);
  products: any = [];
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);
  checkout_info:any = {
    customer_name: "Raza Khalid",
    customer_phone: "(123) 123-1234",
    delivery_address_1: "123 Summit Ave",
    delivery_address_2: "Apt 1",
    delivery_address_city: "St Paul",
    delivery_address_state: "MN",
    delivery_address_zip: 55405,
    delivery_address_country: "USA",
    order_total: 576.99,
    order_product_ids: "EG-4ZZ5A6BB7C"
  };
  ngOnInit() {
    this.getAllProducts();
  }
  async getAllProducts() {
    this.loadingAnimationService.startLoading();
    this.products = await this.productService.getProducts();
    this.loadingAnimationService.stopLoading();
    // console.log(this.products);
  }
  filterProducts = this.productService.filterProducts
}
