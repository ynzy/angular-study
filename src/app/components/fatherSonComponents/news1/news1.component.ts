import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.less']
})
export class News1Component implements OnInit {
  @ViewChild('footer',{static:false}) footer:any;
  public list:any[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push('这是第'+ i + '条数据')
      
    }
  }
  
  getChild() {
    // console.log(this.footer)
    // console.log(this.footer.msg)
    this.footer.run()
  }
  getSunMethod(e) {
    console.log(e)
  }
}
