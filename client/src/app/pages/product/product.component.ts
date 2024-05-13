import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../types";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  constructor() {
    this.getProduct();
  }
  async getProduct() {
    const productIdFromRoute = this.route.snapshot.params['product_id'];
    this.product = await this.productService.findById(productIdFromRoute);
    console.log(this.product);
  }
}
