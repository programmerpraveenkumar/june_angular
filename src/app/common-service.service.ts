import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
   baseUrl =" http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getHttp(url){
    return this.http.get(this.baseUrl+url);
    //
  }
  postHttp(url,param){
    return this.http.post(this.baseUrl+url,param);    
  }

  sampleObservable(username,password){
      return new Observable((res)=>{
        if(username == "admin" && password == "pass"){
            //sending two response.
            res.next("sample success response");
            res.next("this is another response");
        }else{
          res.error("username or password is wrong");
        }
        
        res.complete;
      })
  }
  samplePromise(username,password){
    return new Promise((res,error)=>{
      if(username == "admin" && password == "pass"){
        //sending two response.
        res("this is success response");
    }else{
      error("username or password is wrong");
    }
      
    })
  }
}
