import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public flag:boolean=true
  constructor() { }

  ngOnInit() {
    //组件和指令初始化完成  并不是真正的dom加载完成
    let box:any = document.getElementById('box');
    console.log(box.innerHTML)
    box.style.color='red';
    //获取不到dom节点
    /*
    let box1:any = document.getElementById('box1');
    console.log(box1.innerHTML)
    box1.style.color='blue';
    */
  }
  //*视图加载完成以后触发的方法  dom加载完成(建议dom操作放在这里面)
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //获取dom节点时定义变量指定变量类型，不然会报错
    let box1:any = document.getElementById('box1');
    console.log(box1.innerHTML)
    box1.style.color='blue';
  }
  run() {
    console.log('我是header组件里面的run方法')
  }
}
