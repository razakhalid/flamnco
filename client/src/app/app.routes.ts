import { Routes } from '@angular/router';
import { ShopPageComponent } from "./pages/shop/shop-page.component";
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: ShopPageComponent },
  { path: 'product', component: ProductComponent }
];
