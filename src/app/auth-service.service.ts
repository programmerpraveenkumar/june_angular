import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService  implements  CanActivate{

  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log(localStorage.getItem("user_id"));
    if(localStorage.getItem("user_id") == "1"){
      return true;
    }else{
      this.router.navigate(['login']);
      return false; 
    }
    
    //return true;
  }
  // 
  
}
