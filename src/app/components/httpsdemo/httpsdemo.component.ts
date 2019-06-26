import { Component, OnInit } from '@angular/core';
//当做一个服务
import { HttpClient, HttpHeaders } from "@angular/common/http";
//使用服务里面的axios获取数据
import { HttpaxiosService } from "../../services/httpAxios/httpaxios.service";

@Component({
  selector: 'app-httpsdemo',
  templateUrl: './httpsdemo.component.html',
  styleUrls: ['./httpsdemo.component.less']
})
export class HttpsdemoComponent implements OnInit {
  public list: any[] = [];
  constructor(public http: HttpClient,public aixos:HttpaxiosService) { }

  ngOnInit() {
  }
  sendget() {
    // alert('请求get数据')
    var api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    });
  }
  submitPost() {
    //手动设置请求类型
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //会有跨域需要后台处理
    var api = "http://127.0.0.1:3000/doLogin";
    this.http.post(api, { username: '张三', age: '20' }, httpOptions)
    .subscribe(response => {
      console.log(response);
    });
  }
  getJsonpData() {
    //jsonp请求 服务器必须支持jsonp
    var api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe(response => {
      console.log(response);
    });
  }
  getAxiosData() {
    var api = "http://a.itying.com/api/productlist";
    this.aixos.get(api).then((data)=> {
      console.log(data)
    }) 
  }
  postAxiosData() {
    var api = "http://127.0.0.1:3000/doLogin";
    this.aixos.post(api,{ username: '张三', age: '20' }).then((data)=> {
      console.log(data)
    }) 
  }
}
