import { Routes } from '@angular/router';
import { ShopPageComponent } from "./shop-page/shop-page.component";
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: ShopPageComponent },
  { path: 'contact', component: ContactComponent} //Did this

];


