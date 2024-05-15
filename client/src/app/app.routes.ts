import { Routes } from '@angular/router';
import { ShopPageComponent } from "./pages/shop/shop-page.component";
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {OrderConfirmationComponent} from "./pages/order-confirmation/order-confirmation.component";
import {OrdersComponent} from "./pages/orders/orders.component";

export const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'product/:product_id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }
];
