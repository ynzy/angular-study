import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public picUrl="https://www.baidu.com/img/baidu_jgylogo3.gif";
  public list:any[]=[{
    'title':'我是新闻1'
  },{
    'title':'我是新闻2'
  },{
    'title':'我是新闻3'
  }]
  public orderStatus:number=1; // 1.表示已经支付  2.表示确认订单 3.已经发货 
  public flag:boolean=true;
  public attr:string="red";

  public tody:any=new Date();
  public title:string='我是标题';
  public keywords:string='这是默认值'

  constructor() {
    // console.log(this.tody)
  }

  ngOnInit() {
  }
  run() {
    alert('执行方法，自定义事件');
    // console.log(this.tody)
  }
  getDate() {
    alert(this.flag)
  }
  handleChange() {
    this.title ="改变后的数据"
  }
  runEvent(e) {
    // console.log(e)
    //!定义变量要指定类型
    var dom:any = event.target;
    dom.style.color="red"
  }
  keyDown(e) {
    console.log('keydown事件')
    if(e.keyCode===13) {
      console.log('按了一下回车')
    }else {
      console.log(e.target.value)
    }
  }
  keyUp(e) {
    console.log('keyup事件')
    if(e.keyCode===13) {
      console.log(e.target.value)
      // console.log('按了一下回车')
    }
  }
  changeKeyWords() {
    this.keywords = '修改keywords的值'
  }
  getKeyWords() {
    console.log(this.keywords)
  }
}
