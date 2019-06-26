/*
ViewChild获取dom节点
1.模板中给dom起一个名字
  <div #myBox>
  测试viewChild
  </div>
2.在业务逻辑里面引入ViewChild
  import { Component, OnInit,ViewChild } from '@angular/core';
3.写在类里面
  @ViewChild('myBox',{static:false}) myBox:any;
4.ngAfterViewInit生命周期中获取dom
  console.log(this.myBox.nativeElement)
  mybox.style.background='red'
 */
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit {
  //获取dom节点
  @ViewChild('myBox',{static:false}) myBox:any;
  //获取一个组件
  @ViewChild('header',{static:false}) header:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.myBox.nativeElement)
    var mybox:any = this.myBox.nativeElement
    mybox.style.color='#000'
    mybox.style.background='red'
    
  }
  getrun() {
    this.header.run()
  }
}
