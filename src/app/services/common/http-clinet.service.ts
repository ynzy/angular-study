import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClinetService {
  public Host:string= 'http://a.itying.com/'
  constructor(public http:HttpClient) { }
  /*
    api/productlist 
    http://a.itying.com/api/productlist 
  */
  get(api) {
    return new Promise((resolve,reject) => {
      this.http.get(this.Host + api).subscribe((response)=> {
        resolve(response)
      })
    })
  }
}
