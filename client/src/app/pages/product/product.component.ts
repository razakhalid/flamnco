import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../types";
import {CheckoutService} from "../../services/checkout.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  checkoutService: CheckoutService = inject(CheckoutService);
  constructor() {
    this.getProduct();
  }
  async getProduct() {
    const productIdFromRoute = this.route.snapshot.params['product_id'];
    this.product = await this.productService.findById(productIdFromRoute);
    console.log(this.product);
  }
  addToCart(): void {
    console.log("Button Works");
  }
}
