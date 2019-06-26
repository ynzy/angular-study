import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../services/request/request.service";
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.less']
})
export class RxJSComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit() {
    //1.同步方法
    let data:any = this.request.getData();
    console.log(data)
    //2.callback获取异步数据
    let callbackData = this.request.getCallbackData((data)=>{
      console.log(data)
    });
    //3. promise获取异步数据
    var promiseData = this.request.getPromiseData();
    promiseData.then((data)=> {
      console.log(data)
    })
    //4.rxjs获取异步数据
    var rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data)=> {
      console.log(data)
    })
    //5.过一秒以后撤回刚才的操作
    var streem= this.request.getRxjsData();
    var d=streem.subscribe((data)=>{
      console.log(data);
    })
    setTimeout(() => {
      d.unsubscribe();
    }, 1000);
    //6.promise多次执行(没有这个能力)
      // var intervalData = this.request.getPromiseIntervalData();
      // intervalData.then((data)=> {
      //   console.log(data)
      // })
    // 7.rxjs多次执行
      // var streemInterval=this.request.getRxjsIntervalData();
      // streemInterval.subscribe((data)=>{
      //     console.log(data);
      // })
    //8、用工具方法对返回的数据进行处理
    
    /*
    var streemNum=this.request.getRxjsIntervalNum();
    streemNum.pipe( //管道
      filter((value)=>{ //过滤数据
        if(value%2==0){
          return true;
        }
      })
    )
    .subscribe((data)=>{
      console.log(data);
    })
    */
   /*
   var streemNum=this.request.getRxjsIntervalNum();
    streemNum.pipe( //管道
      map((value)=>{ //map处理数据
          return value*value;
      })
    )
    .subscribe((data)=>{
      console.log(data);
    })
   */
    //工具方法可以连用
    var streemNum=this.request.getRxjsIntervalNum();
    streemNum.pipe( //管道
      filter((value)=>{ //过滤数据
        if(value%2==0){
          return true;
        }
      }),
      map((value)=>{ //map处理数据
        return value*value;
      })
    )
    .subscribe((data)=>{
      console.log(data);
    })
  }
  
}
