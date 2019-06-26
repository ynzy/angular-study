import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.less']
})
export class Header1Component implements OnInit {
  //接收父组件传递的数据
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }
  getPerentRun() {
    //执行父组件的方法
    // this.run()
    console.log(this.home)
  }
}
