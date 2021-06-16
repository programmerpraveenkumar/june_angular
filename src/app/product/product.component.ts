import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product_name = "";
  product_price = "";
  constructor(private common:CommonServiceService) { }

  ngOnInit(): void {
  }
  
storeProduct(){
  let data ={
    "name":this.product_name,
    "price":this.product_price,
    "id":Math.floor(Math.random() * 1000) 
  }
  this.common.postHttp("products/",data).subscribe(res=>{
    console.log(res);
  },err=>{
    alert(err);
  })
}

}
