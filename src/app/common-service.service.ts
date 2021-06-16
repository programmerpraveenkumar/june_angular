import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
   baseUrl =" http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getHttp(url){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.get(this.baseUrl+url, httpOptions );
    //
  }
  postHttp(url,param){
    //this.http.put->updating muliple data
    //this.http.patch->updating one or one field data
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post(this.baseUrl+url,httpOptions,param);    
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
