import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
  }
  login(){
    let username = "admin";
    let password = "pass";
    this.commonService.samplePromise(username,password).then(res=>{
      console.log("Success is ",res);
    }).catch(err=>{
      console.log("Error is "+err);
    })
    this.commonService.sampleObservable(username,password).subscribe(res=>{
      console.log(res);
    })
    //sampleObservable
  }
}
