import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  /*
 声明属性的几种方式：
    
   public     共有 *(默认)    可以在这个类里面使用，也可以在类外面使用
   protected  保护类型        它只有在当前类和它的子类里面可以访问
   private    私有            只有在当前类才可以访问这个属性
 */
  // *定义数据
  public title = "我是新闻组件";
  msg = "我是一个新闻组件的msg";
  private username: string = '张三';
  public student: any = '我是一个学生的属性(数据)' // !推荐

  public userinfo: object = {
    username: "张三",
    age: 20
  }
  public message: any;

  public content = '<h2>我是一个html标签</h2>';
  //定义数组
  public arr: any[] = ['111', '222', '333'];
  public list: Array < string > = ['我是数组1', '我是数组2'];
  public userlist: any[] = [{
    username: '张三',
    age: 20
  }, {
    username: '李四',
    age: 20
  }, {
    username: '王五',
    age: 20
  }]
  public cars: any[] = [{
      cate: '宝马',
      list: [{
        title: '宝马x1',
        price: '30万'
      }, {
        title: '宝马x2',
        price: '40万'
      }, {
        title: '宝马x3',
        price: '50万'
      }]
    },
    {
      cate: '奥迪',
      list: [{
        title: '奥迪q1',
        price: '50万'
      }, {
        title: '奥迪q2',
        price: '60万'
      }, {
        title: '奥迪q3',
        price: '70万'
      }]
    }
  ]


  constructor() { //构造函数
    this.message = '这是给属性赋值--（改变属性的值'
    //获取属性的值
    console.log(this.msg);
    //改变属性的值
    this.msg = '改变后的值'

  }

  ngOnInit() {}

}
