import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username = "admin";
   password = "pass";
  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
  }
  login(){
    
    this.commonService.samplePromise(this.username,this.password).then(res=>{
      console.log("Success is ",res);
    }).catch(err=>{
      console.log("Error is "+err);
    })
    this.commonService.sampleObservable(this.username,this.password).subscribe(res=>{
      console.log(res);
    })
    //sampleObservable
  }
}
