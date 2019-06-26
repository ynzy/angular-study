import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.less']
})
export class Home1Component implements OnInit {
  public title:string='我是首页组件的标题';
  public msg:string='我是父组件的msg'
  constructor() { }

  ngOnInit() {
  }
  run() {
    alert('我是父组件的alert方法')
  }
}
