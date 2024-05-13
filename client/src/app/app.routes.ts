import { Routes } from '@angular/router';
import { ShopPageComponent } from "./pages/shop/shop-page.component";
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'cart', component: CartComponent }
];
