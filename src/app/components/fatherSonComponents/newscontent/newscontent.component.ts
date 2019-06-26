//TODO: 路由跳转
/*
get传值
  1.跳转
    <li *ngFor="let item of list;let key=index">
      <a [routerLink]="[ '/newcontent']" [queryParams]="{aid:key}">{{key}}---{{item}}</a>
    </li>
  2. 接收
    import { ActivatedRoute} from '@angular/router';
    constructor(public route:ActivatedRoute) { }
    this.route.queryParams.subscribe((data)=> {
      console.log(data)
    })
动态路由传值
1.配置动态路由
  { path: 'newcontent/:aid', component: NewscontentComponent },
2.跳转
  <li *ngFor="let item of list;let key=index">
    <a [routerLink]="[ '/newcontent/', key]" >{{key}}---{{item}}</a>
  </li>
3.接收
  import { ActivatedRoute} from '@angular/router';
  constructor(public route:ActivatedRoute) { }
  this.route.params.subscribe((data)=> {
    console.log(data)
  })
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.less']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route)
    //get 传值
      // this.route.queryParams.subscribe((data)=> {
      //   console.log(data)
      // })
    //动态路由传值
    this.route.params.subscribe((data)=> {
      console.log(data)
    })
  }

}
