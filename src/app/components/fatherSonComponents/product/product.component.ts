/*
js跳转路由
1.动态路由
  1.引入声明模块
    import { Router } from '@angular/router';
    constructor(private router: Router) {}
  2.跳转
    this.router.navigate(['/productcontent/', '123'])
2、get 传值
  1. 引入
    import { Router,NavigationExtras } from '@angular/router';
  2. 跳转
    this.router.navigate(['/productcontent'],{
      queryParams: {'aid':213}
    });
*/
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  public list:any[] = [];
  constructor(private router: Router) {
  }
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push('这是第'+ i + '条数据')
    }
  }
  goProductContent() {
    //路由跳转  适合普通路由，动态路由
    this.router.navigate(['/productcontent/', '123'])
  }
  gohome() {
    this.router.navigate(['./main'])
  }
  goproduct() {
    let queryParams:NavigationExtras = {
      queryParams: {'aid':213}
    }
    this.router.navigate(['/productcontent'],queryParams);
  }
}
