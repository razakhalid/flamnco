import {Component, inject} from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormControl} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  productsInCart: any = [];
  checkoutService:CheckoutService = inject(CheckoutService);
  checkoutForm = new FormGroup({
    firstNameShipping: new FormControl(''),
    lastNameShipping: new FormControl(''),
    streetAddressShipping: new FormControl(''),
    cityShipping: new FormControl(''),
    stateShipping: new FormControl(''),
    zipShipping: new FormControl(null),
    countryShipping: new FormControl(''),
    firstNamePayment: new FormControl(''),
    lastNamePayment: new FormControl(''),
    cardNumber: new FormControl(null),
    expiration: new FormControl(''),
    cvv: new FormControl(null),
    firstNameBilling: new FormControl(''),
    lastNameBilling: new FormControl(''),
    streetAddressBilling: new FormControl(''),
    cityBilling: new FormControl(''),
    stateBilling: new FormControl(''),
    zipBilling: new FormControl(null),
    countryBilling: new FormControl(''),
    sameAsShipping: new FormControl(true)
  });
  submitCheckout() {
    console.log(this.checkoutForm.value.firstNameShipping);
  }
  ngOnInit() {
    console.log(this.productsInCart);
    this.productsInCart = this.checkoutService.getProductsInCart();
    this.checkoutService.getTotal();
  }
}
