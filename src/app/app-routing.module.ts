import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent,canActivate:[AuthServiceService]},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'login',component:LoginComponent},
  {path:' checkout',component:CheckoutComponent},
  {path:'',component:HomeComponent},
   {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
    {path:'user2',loadChildren:'./user2/user2.module#User2Module'}
  // {path:"",loadChildren:'./user3/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
