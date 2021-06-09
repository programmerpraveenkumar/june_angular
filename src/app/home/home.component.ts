import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  messages= [];
  constructor(private common:CommonServiceService) { }

  ngOnInit(): void {
    this.common.getHttp("products").subscribe((res:any)=>{
      //console.log(res);
      this.products = res;
    })
    this.common.getHttp("support_message").subscribe((res:any)=>{
      //console.log(res);
      this.messages = res;
    })
  }
  counter(i: number) {
    return new Array(i);
}

}
