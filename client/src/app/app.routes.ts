import { Routes } from '@angular/router';
import { ShopPageComponent } from "./pages/shop/shop-page.component";
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'product/:product_id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }
];
