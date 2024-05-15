import {Component, isDevMode, inject} from '@angular/core';
import {NgFor, NgClass} from "@angular/common";
import {Filter, Product} from "../../types";
import {ProductService} from "../../services/product.service";
import {LoadingAnimationComponent} from "../../components/loading-animation/loading-animation.component";
import {LoadingAnimationService} from "../../services/loading-animation.service";
import {RouterLink} from "@angular/router";
import {CheckoutService} from "../../services/checkout.service";
import {FormsModule, NgModel} from "@angular/forms";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, LoadingAnimationComponent, RouterLink, NgClass, FormsModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {
  productService:ProductService = inject(ProductService);
  checkoutService:CheckoutService = inject(CheckoutService);
  products: any = [];
  searchInput: string = "";
  filters: Array<Filter> = [
    { name: "Electric Guitar", label: "Electric Guitars" },
    { name: "Acoustic Guitar", label: "Acoustic Guitars" },
    { name: "Classical Guitar", label: "Classical & Flamenco Guitars" },
    { name: "Bass Guitar", label: "Bass Guitars" }
  ];
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);
  ngOnInit(): void {
    this.getAllProducts();
    this.productService.activeFilter = "";
  }
  async getAllProducts() {
    this.loadingAnimationService.startLoading();
    this.products = await this.productService.getProducts();
    this.loadingAnimationService.stopLoading();
    // console.log(this.products);
  }
  filterProducts(filter: string) {
    this.products = this.productService.filterProducts(filter);
  }
}
