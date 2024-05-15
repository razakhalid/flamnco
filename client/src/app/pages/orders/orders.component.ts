import {Component, inject, isDevMode} from '@angular/core';
import {NgFor} from "@angular/common";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  orders: any = [];
  productService: ProductService = inject(ProductService);
  ngOnInit() {
    this.getOrders()
  }
  async getOrders() {
    try {
      const url = this.baseUrl + '/order';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      this.orders = data;
    } catch (err) {
      console.error(err);
    }
  }
}
