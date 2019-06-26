import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getData() {
    return 'this is service data'
  }
  getCallbackData(callback) {
    setTimeout(() => {
      var data='张三'
      // return data;
      callback(data)
    }, 1000);
    //先执行到这里，再执行到setTimeout方法里
  }
  getPromiseData() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        var data='张三--promise'
        resolve(data)
      }, 1000);
    })
  }
  getRxjsData() {
    return new Observable((observer)=> {
      setTimeout(() => {
        var data='张三--rxjs'
        observer.next(data);
        // observer.error('数据');
      }, 3000);
    })
  }
  //多次执行
  getPromiseIntervalData() {
    return new Promise((resolve,reject)=>{
      setInterval(() => {
        var data='张三--promiseIntervalData'
        resolve(data)
      }, 1000);
    })
  }
  getRxjsIntervalData(){
    let count=0;
    return new Observable<any>((observer)=>{
        setInterval(() => {
            count++;
            var username='张三--Rxjs-Interval--'+count;
            observer.next(username);     
            // observer.error('数据')        
        }, 1000); 
    })
  }
  //
  getRxjsIntervalNum(){
    let count=0;
    return new Observable<any>((observer)=>{
        setInterval(() => {
            count++;
            observer.next(count);        
        }, 1000); 
    })
  }
}
