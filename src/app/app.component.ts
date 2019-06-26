//引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //使用这个组件的名称
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.less'] //css
})
export class AppComponent {
  title = 'my-app';   //定义属性
  flag:boolean = true;
  changeTitle() {
    this.title='该改变title'
  }
  changeFlag() {
    this.flag = !this.flag
  }
}
