import {Component, isDevMode} from '@angular/core';
import {GridComponent} from "../grid/grid.component";
import {ApiService} from "../api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [GridComponent, FormsModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {
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
  products = [];
  constructor(private api:ApiService) {}
  ngOnInit() {
    this.getAllProducts();
  }
  async getAllProducts() {
    const products = await this.api.get('/products');
    this.products = products;
    console.log(products);
  }
  handleSubmit() {
    const checkout_info = this.checkout_info;
    this.api.post('/orders', {
      checkout_info
    });
  }
}
