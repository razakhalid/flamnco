import {Component, inject} from '@angular/core';
import {CheckoutService} from "../../services/checkout.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {
  checkoutService: CheckoutService = inject(CheckoutService);
}
