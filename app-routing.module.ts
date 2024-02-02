import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { VProductComponent } from './v-product/v-product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'shop', component: ShopComponent },

  { path: 'view/:id', component: VProductComponent },

  { path: 'search/:title', component: SearchComponent },

  { path: 'cart', component: CartComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
