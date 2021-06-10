import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User2RoutingModule } from './user2-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    User2RoutingModule
  ]
})
export class User2Module { }
