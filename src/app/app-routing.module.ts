import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:' checkout',component:CheckoutComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
