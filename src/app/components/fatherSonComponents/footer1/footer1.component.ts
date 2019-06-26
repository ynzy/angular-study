import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.less']
})
export class Footer1Component implements OnInit {
  public msg:string='我是子组件的msg'
  /*用 EventEmitter 和 output 装饰器配合使用 <string>指定类型变量*/
  @Output() private outer = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  run() {
    alert('我是子组件的方法')
  }
  sendParent() {
    this.outer.emit('子组件的数据广播给父组件')
  }
}
