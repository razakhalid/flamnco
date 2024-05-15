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
  async submitCheckoutData() {
    await this.checkoutService.submitCheckoutData({
      firstNameShipping: this.checkoutForm.value.firstNameShipping,
      lastNameShipping: this.checkoutForm.value.lastNameShipping,
      streetAddressShipping: this.checkoutForm.value.streetAddressShipping,
      cityShipping: this.checkoutForm.value.cityShipping,
      stateShipping: this.checkoutForm.value.stateShipping,
      zipShipping: this.checkoutForm.value.zipShipping,
      countryShipping: this.checkoutForm.value.countryShipping,
      firstNamePayment: this.checkoutForm.value.firstNamePayment,
      lastNamePayment: this.checkoutForm.value.lastNamePayment,
      cardNumber: this.checkoutForm.value.cardNumber,
      expiration: this.checkoutForm.value.expiration,
      cvv: this.checkoutForm.value.cvv,
      firstNameBilling: this.checkoutForm.value.firstNameBilling,
      lastNameBilling: this.checkoutForm.value.lastNameBilling,
      streetAddressBilling: this.checkoutForm.value.streetAddressBilling,
      cityBilling: this.checkoutForm.value.cityBilling,
      stateBilling: this.checkoutForm.value.stateBilling,
      zipBilling: this.checkoutForm.value.zipBilling,
      countryBilling: this.checkoutForm.value.countryBilling,
      sameAsShipping: this.checkoutForm.value.sameAsShipping
    });
  }
  ngOnInit() {
    this.productsInCart =  this.checkoutService.getProductsInCart();
  }
}
