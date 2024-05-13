import { Component } from '@angular/core';
import { Product } from '../../types';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Array<Product> | undefined = [
    {
      product_id: "EG-5E6F7G8H", product_name: "Midnight Sparkle Electric Guitar", product_manufacturer: "NovaSound Guitar Co.",
      product_qty_remaining: 3, product_price: 249.99, product_category: "electric",
      product_img_url: "https://media.guitarcenter.com/is/image/MMGS7/L69587000003000-02-600x600.jpg",
      product_description: "Really nice guitar"
     },
    {
      product_id: "CG-J7K4", product_name: "Serenade Symphony Classical Guitar", product_manufacturer: "Harmony Forge Guitars",
      product_qty_remaining: 1, product_price: 356.78, product_category: "classical",
      product_img_url: "https://media.guitarcenter.com/is/image/MMGS7/J22561000001000-02-600x600.jpg",
      product_description: "Really nice guitar"
    }
  ]
}
