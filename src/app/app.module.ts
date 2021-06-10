import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {AdminModule} from './admin/admin.module'
import {User2Module} from './user2/user2.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    CheckoutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    User2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
