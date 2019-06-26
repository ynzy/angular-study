import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnInit {
  @Input('title')title:string;
  public msg:string = '我是一条数据'
  public userInfo:string;
  public olduserInfo:string;
  constructor() {
    console.log('0/构造函数执行了--除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
  }
  ngOnChanges(){
    console.log('1/ngOnChanges执行了--当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)')
    
  }
  ngOnInit() { //!重要
    console.log('2/ngOnInit执行了--请求数据一般放在这个里面')
  }
  ngDoCheck(){
    console.log('3/ngDoCheck执行了--检测，并在发生Angular无法或不愿意自己检测的变化时作出反应')
    if(this.userInfo!==this.olduserInfo){
      console.log(`你从${this.olduserInfo}改成${this.userInfo}`)
      this.olduserInfo = this.userInfo
    } else {
      console.log('数据没有变化')
    }
  }

  ngAfterContentInit(){
    console.log('4/ngAfterContentInit执行了--当把内容投影进组件之后调用')
  }
  ngAfterContentChecked() {
    console.log('5/ngAfterContentChecked执行了--每次完成被投影组件内容的变更检测之后调用')
  
  }

  ngAfterViewInit() {  //! 重要
    console.log('6/ngAfterViewInit执行了--初始化完组件视图及其子视图之后调用(dom操作放在这个里面)')
  }
  ngAfterViewChecked() {
    console.log('7/ngAfterViewChecked执行了--每次做完组件视图和子视图的变更检测之后调用')
  }

  ngOnDestroy() { //! 重要
    console.log('08ngOnDestroy执行了--销毁指令/组件之前调用');
  }
  changeMsg(){
    this.msg = '数据改变了'
  }
}
